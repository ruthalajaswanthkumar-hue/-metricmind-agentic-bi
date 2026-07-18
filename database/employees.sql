CREATE TABLE Employees (

    EmployeeID INT PRIMARY KEY AUTO_INCREMENT,
    EmployeeName VARCHAR(100) NOT NULL,
    JobTitle VARCHAR(100),
    Email VARCHAR(100) UNIQUE,
    HireDate DATE,
    RegionID INT NOT NULL,


    CONSTRAINT fk_employee_region
        FOREIGN KEY (RegionID)
        REFERENCES Regions(RegionID)

);


CREATE INDEX idx_employee_region
ON Employees(RegionID);