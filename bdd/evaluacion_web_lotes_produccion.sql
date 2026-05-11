-- MySQL dump 10.13  Distrib 8.0.45, for Win64 (x86_64)
--
-- Host: 10.32.0.78    Database: evaluacion_web
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `lotes_produccion`
--

DROP TABLE IF EXISTS `lotes_produccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lotes_produccion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codigo_lote` varchar(40) DEFAULT NULL,
  `producto_nombre` varchar(140) DEFAULT NULL,
  `fecha_fabricacion` date DEFAULT NULL,
  `fecha_vencimiento` date DEFAULT NULL,
  `cantidad_producida` int DEFAULT NULL,
  `estado_calidad` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lotes_produccion`
--

LOCK TABLES `lotes_produccion` WRITE;
/*!40000 ALTER TABLE `lotes_produccion` DISABLE KEYS */;
INSERT INTO `lotes_produccion` VALUES (1,'LOT-2024-001','Yogur Natural','2024-01-15','2024-04-15',5000,'Aprobado'),(2,'LOT-2024-002','Yogur Fresa','2024-01-20','2024-04-20',4800,'Aprobado'),(3,'LOT-2024-003','Queso Fresco','2024-02-01','2024-05-01',2000,'Aprobado'),(4,'LOT-2024-004','Leche Pasteurizada','2024-02-10','2024-02-24',10000,'Aprobado'),(5,'LOT-2024-005','Mantequilla','2024-02-15','2024-05-15',1500,'En revisión'),(6,'LOT-2024-006','Yogur Vainilla','2024-03-01','2024-06-01',5200,'Aprobado'),(7,'LOT-2024-007','Queso Oaxaca','2024-03-10','2024-06-10',1800,'Rechazado'),(8,'LOT-2024-008','Crema Ácida','2024-03-15','2024-06-15',2500,'Aprobado');
/*!40000 ALTER TABLE `lotes_produccion` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-05-11 13:44:38
