CREATE TABLE Products (

    ProductID INT PRIMARY KEY AUTO_INCREMENT,
    ProductName VARCHAR(150) NOT NULL,
    CategoryID INT NOT NULL,
    UnitPrice DECIMAL(10,2) NOT NULL,
    StockQuantity INT DEFAULT 0,


    CONSTRAINT fk_product_category
        FOREIGN KEY (CategoryID)
        REFERENCES Categories(CategoryID)

);


CREATE INDEX idx_product_category
ON Products(CategoryID);