-- Runtime: 766ms (96.99%)
SELECT Activity.player_id, MIN(Activity.event_date) AS first_login
FROM Activity
GROUP BY Activity.player_id;