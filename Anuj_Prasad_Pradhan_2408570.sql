-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 31, 2024 at 04:49 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `weather`
--

-- --------------------------------------------------------

--
-- Table structure for table `weatherdb`
--

CREATE TABLE `weatherdb` (
  `id` int(11) NOT NULL,
  `images` text NOT NULL,
  `temp` text NOT NULL,
  `pressure` text NOT NULL,
  `humidity` text NOT NULL,
  `windspeed` text NOT NULL,
  `name` text NOT NULL,
  `timezone` text NOT NULL,
  `day` text NOT NULL,
  `date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `weatherdb`
--

INSERT INTO `weatherdb` (`id`, `images`, `temp`, `pressure`, `humidity`, `windspeed`, `name`, `timezone`, `day`, `date`) VALUES
(1, 'Clear', '24', '1018', '39', '1.34', 'Silchar', '19800', 'Sun', '28 Jan 2024'),
(2, 'Clear', '23', '1019', '35', '0.96', 'Silchar', '19800', 'Mon', '29 Jan 2024'),
(3, 'Clear', '21', '1019', '40', '1.43', 'Silchar', '19800', 'Tue', '30 Jan 2024'),
(4, 'Clouds', '18', '1019', '54', '1.13', 'Silchar', '19800', 'Wed', '24 Jan 2024'),
(5, 'Clear', '24', '1015', '33', '1.35', 'Silchar', '19800', 'Thu', '25 Jan 2024'),
(6, 'Clouds', '15', '1018', '57', '0.34', 'Silchar', '19800', 'Fri', '26 Jan 2024'),
(7, 'Clear', '24', '1015', '38', '1.89', 'Silchar', '19800', 'Sat', '27 Jan 2024');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `weatherdb`
--
ALTER TABLE `weatherdb`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `weatherdb`
--
ALTER TABLE `weatherdb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=135;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
