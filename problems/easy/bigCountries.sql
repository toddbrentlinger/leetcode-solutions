-- UNION (quicker than OR)

SELECT World.name, World.population, World.area
FROM World
WHERE World.area >= 3000000
UNION
SELECT World.name, World.population, World.area
FROM World
WHERE World.population >= 25000000;

-- OR

SELECT World.name, World.population, World.area
FROM World
WHERE World.area >= 3000000 OR World.population >= 25000000;
