const router = require("express").Router();

module.exports = db => {
  router.get("/topics", (request, response) => {
    db.query(`
      SELECT 
      topic.id,
      topic.title,
      topic.slug
      FROM topic
    `).then(({ rows: topics }) => {
      response.json(topics);
    });
  });
  router.get('/photos', async (req, res) => {
    const { field, query } = req.query;
  
    let sqlQuery = `SELECT * FROM photos`;
  
    if (field && query) {
      switch (field.toLowerCase()) {
        case 'username':
          sqlQuery += ` WHERE username ILIKE '%${query}%'`;
          break;
        case 'location':
          sqlQuery += ` WHERE city ILIKE '%${query}%' OR country ILIKE '%${query}%'`;
          break;
        // Handle other fields similarly
        default:
          break;
      }
    }
  
    try {
      const result = await db.query(sqlQuery);
      res.json(result.rows);
    } catch (error) {
      console.error('Error fetching photos:', error);
      res.status(500).json({ error: 'An error occurred while fetching photos' });
    }
  });
  
  
  
  
  router.get("/topics/photos/:id", (request, response) => {
    const protocol = request.protocol;
    const host = request.hostname;
    const port = process.env.PORT || 8001;
    const serverUrl = `${protocol}://${host}:${port}`;

    db.query(`
    SELECT 
      json_agg(
          json_build_object(
          'id', photo.id,
          'urls', json_build_object(
            'full', concat('${serverUrl}/images/', photo.full_url),
            'regular', concat('${serverUrl}/images/', photo.regular_url)
          ),
          'user', json_build_object(
            'username', user_account.username,
            'name', user_account.fullname,
            'profile', concat('${serverUrl}/images/', user_account.profile_url)
          ),
          'location', json_build_object(
            'city', photo.city,
            'country', photo.country
          ),
          'similar_photos', (
            SELECT 
              json_agg(
                json_build_object(
                  'id', similar_photo.id,
                  'urls', json_build_object(
                    'full', concat('${serverUrl}/images/', similar_photo.full_url),
                    'regular', concat('${serverUrl}/images/', similar_photo.regular_url)
                  ),
                  'user', json_build_object(
                    'username', similar_user_account.username,
                    'name', similar_user_account.fullname,
                    'profile', concat('${serverUrl}/images/', similar_user_account.profile_url)
                  ),
                  'location', json_build_object(
                    'city', similar_photo.city,
                    'country', similar_photo.country
                  )
                )
              )
            FROM photo AS similar_photo
            JOIN user_account AS similar_user_account ON similar_user_account.id = similar_photo.user_id
            WHERE similar_photo.id <> photo.id
            AND similar_photo.topic_id = photo.topic_id
            LIMIT 4
          )
        )
      ) as topic_photo_data
      FROM topic
      JOIN photo ON photo.topic_id = topic.id
      JOIN user_account ON user_account.id = photo.user_id
      WHERE topic.id = ${request.params.id}
    `).then(({ rows }) => {
      response.json(rows[0].topic_photo_data);
    });
  });

  return router;
};


