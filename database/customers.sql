CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY AUTO_INCREMENT,
    CustomerName VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE,
    Phone VARCHAR(20),
    Address VARCHAR(255),
    RegionID INT NOT NULL,

    CONSTRAINT fk_customer_region
      FOREIGN KEY (RegionID)
      REFERENCES Regions(RegionID)

);


CREATE INDEX idx_customer_region
ON Customers(RegionID);