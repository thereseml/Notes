-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Generation Time: Jun 12, 2022 at 07:12 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `notes`
--

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `id` int(11) NOT NULL,
  `documentTitle` varchar(128) DEFAULT NULL,
  `documentText` varchar(1000) DEFAULT NULL,
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`id`, `documentTitle`, `documentText`, `createDate`) VALUES
(2, 'Din titel här', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus elementum placerat. Fusce placerat condimentum rutrum. Pellentesque dapibus quam enim, vitae cursus arcu porttitor a. Vivamus enim odio, dictum quis semper mollis, aliquet id quam. In porttitor erat sit amet diam faucibus, eu scelerisque orci bibendum.', '2022-06-04 08:53:03'),
(3, 'Din dagbok', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus elementum placerat. Fusce placerat condimentum rutrum. Pellentesque dapibus quam enim, vitae cursus arcu porttitor a. Vivamus enim odio, dictum quis semper mollis, aliquet id quam. In porttitor erat sit amet diam faucibus, eu scelerisque orci bibendum.', '2022-06-04 09:02:26'),
(4, 'Hello', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', '2022-06-08 13:38:12'),
(18, 'Annteckningar', 'Städa\r\nHandla', '2022-06-08 15:12:25'),
(19, 'Test Test', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus elementum placerat. Fusce placerat condimentum rutrum. Pellentesque dapibus quam enim, vitae cursus arcu porttitor a.', '2022-06-09 12:02:28'),
(20, 'Här ändrar jag titel', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus elementum placerat. Fusce placerat condimentum rutrum. Pellentesque dapibus quam enim, vitae cursus arcu porttitor a. Vivamus enim odio, dictum quis semper mollis, aliquet id quam. In porttitor erat sit amet diam faucibus, eu scelerisque orci bibendum.', '2022-06-09 12:05:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
