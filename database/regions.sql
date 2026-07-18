CREATE TABLE Regions (
    RegionID INT PRIMARY KEY AUTO_INCREMET,
    RegionName VARCHAR(100) NOT NULL,
    Country VARCHAR(100) NOT NULL,
    State VARCHAR(100),
    City VARCHAR(100),
);

CREATE INDEX idx_region_name
ON Regions(RegionName);;