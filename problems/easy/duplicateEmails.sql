-- Runtime: 595ms (98.33%)
SELECT email AS 'Email'
FROM Person
GROUP BY email
HAVING COUNT(email) > 1;