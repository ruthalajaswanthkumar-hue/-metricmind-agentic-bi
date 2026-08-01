CREATE TABLE Categories (
    CategoryID INT PRIMARY KEY AUTO_INCREMENT,
    CategoryName VARCHAR(100) NOT NULL,
    Description VARCHAR(255),
);

CREATE INDEX idx_category_name
ON Categories(CategoryName);