-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2025 at 10:16 AM
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
-- Database: `emworkexam`
--

-- --------------------------------------------------------

--
-- Table structure for table `incomeexpenses`
--

CREATE TABLE `incomeexpenses` (
  `id` int(11) NOT NULL,
  `listname` varchar(255) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `spent_at` date NOT NULL,
  `type` enum('income','expense') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `incomeexpenses`
--

INSERT INTO `incomeexpenses` (`id`, `listname`, `amount`, `spent_at`, `type`, `created_at`, `updated_at`) VALUES
(1, 'List1', 200.00, '2025-03-22', 'expense', '2025-03-29 07:16:51', '2025-03-29 07:46:05'),
(3, 'List2', 500.20, '2025-03-29', 'income', '2025-03-29 08:08:47', '2025-03-29 08:31:22'),
(6, 'List3', 20.00, '2025-03-28', 'income', '2025-03-29 08:16:22', '2025-03-29 08:16:22'),
(7, 'List4', 100.20, '2025-03-28', 'expense', '2025-03-29 08:23:17', '2025-03-29 08:23:17'),
(8, 'List5', 100000.00, '2025-03-17', 'income', '2025-03-29 08:23:29', '2025-03-29 08:23:29'),
(9, 'List7', 600.00, '2025-03-27', 'income', '2025-03-29 08:25:33', '2025-03-29 08:30:52'),
(10, 'List7', 100.00, '2025-03-28', 'expense', '2025-03-29 08:25:33', '2025-03-29 08:25:33'),
(11, 'List8', 50.00, '2025-03-27', 'expense', '2025-03-29 08:28:21', '2025-03-29 08:28:21'),
(12, 'List9', 200.00, '2025-03-24', 'income', '2025-03-29 08:28:21', '2025-03-29 08:28:21'),
(13, 'List10', 300.00, '2025-03-27', 'income', '2025-03-29 08:28:21', '2025-03-29 08:28:21'),
(14, 'List11', 500.00, '2025-03-19', 'expense', '2025-03-29 08:28:21', '2025-03-29 08:28:21'),
(15, 'List12', 80.00, '2025-03-28', 'income', '2025-03-29 08:28:21', '2025-03-29 08:28:21'),
(16, 'List13', 24444.00, '2025-03-26', 'expense', '2025-03-29 08:28:21', '2025-03-29 08:28:21'),
(17, 'List14', 54421.00, '2025-03-27', 'income', '2025-03-29 08:28:21', '2025-03-29 08:28:21'),
(18, 'List15', 5810.00, '2025-03-25', 'income', '2025-03-29 08:28:21', '2025-03-29 08:28:21'),
(19, 'List16', 500.00, '2025-03-27', 'expense', '2025-03-29 08:28:21', '2025-03-29 08:28:21'),
(20, 'List17', 2522.00, '2025-03-25', 'expense', '2025-03-29 08:28:21', '2025-03-29 08:28:21'),
(21, 'List18', 5000.00, '2025-03-17', 'income', '2025-03-29 08:28:21', '2025-03-29 08:28:21'),
(22, 'List19', 444.00, '2025-03-11', 'expense', '2025-03-29 08:28:21', '2025-03-29 08:28:21'),
(23, 'List20', 2000.00, '2025-03-26', 'expense', '2025-03-29 08:28:21', '2025-03-29 08:28:21'),
(24, 'List1', 500.00, '2025-01-01', 'income', '2025-03-29 09:14:44', '2025-03-29 09:14:44'),
(25, 'List2', 400.00, '2025-01-01', 'expense', '2025-03-29 09:14:44', '2025-03-29 09:14:44'),
(26, 'List3', 544.00, '2025-01-01', 'expense', '2025-03-29 09:14:44', '2025-03-29 09:14:44'),
(27, 'List4', 500.00, '2025-01-01', 'income', '2025-03-29 09:14:44', '2025-03-29 09:14:44'),
(28, 'List5', 200.00, '2025-01-01', 'income', '2025-03-29 09:14:44', '2025-03-29 09:14:44'),
(29, 'List6', 100.00, '2025-01-01', 'expense', '2025-03-29 09:14:44', '2025-03-29 09:14:44'),
(30, 'List7', 100.00, '2025-01-01', 'income', '2025-03-29 09:14:44', '2025-03-29 09:14:44'),
(31, 'List8', 5001.10, '2025-01-01', 'income', '2025-03-29 09:14:44', '2025-03-29 09:14:44'),
(32, 'List9', 200.00, '2025-01-01', 'expense', '2025-03-29 09:14:44', '2025-03-29 09:14:44'),
(33, 'List10', 242.12, '2025-01-01', 'expense', '2025-03-29 09:14:44', '2025-03-29 09:14:44'),
(34, 'List11', 544.00, '2025-01-01', 'expense', '2025-03-29 09:14:44', '2025-03-29 09:14:44'),
(35, 'List12', 1111.00, '2025-01-01', 'income', '2025-03-29 09:14:44', '2025-03-29 09:14:44'),
(36, 'List13', 1221.00, '2025-01-01', 'income', '2025-03-29 09:14:44', '2025-03-29 09:14:44'),
(37, 'List14', 1010.00, '2025-01-01', 'income', '2025-03-29 09:14:44', '2025-03-29 09:14:44'),
(38, 'List15', 545.00, '2025-01-01', 'expense', '2025-03-29 09:14:44', '2025-03-29 09:14:44'),
(39, 'List16', 500.00, '2025-01-01', 'expense', '2025-03-29 09:14:44', '2025-03-29 09:14:44'),
(40, 'List17', 700.00, '2025-01-01', 'income', '2025-03-29 09:14:44', '2025-03-29 09:14:44'),
(41, 'List18', 300.00, '2025-01-01', 'expense', '2025-03-29 09:14:44', '2025-03-29 09:14:44'),
(42, 'List19', 500.00, '2025-01-01', 'income', '2025-03-29 09:14:44', '2025-03-29 09:14:44'),
(43, 'List20', 600.00, '2025-01-01', 'income', '2025-03-29 09:14:44', '2025-03-29 09:14:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `incomeexpenses`
--
ALTER TABLE `incomeexpenses`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `incomeexpenses`
--
ALTER TABLE `incomeexpenses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
