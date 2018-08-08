-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 08, 2018 at 02:44 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alison`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `root_id` int(11) NOT NULL,
  `possition` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `navUrl` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `root_id`, `possition`, `status`, `title`, `url`, `navUrl`, `color`, `image`, `created_at`, `updated_at`) VALUES
(1, 0, 1, 1, 'Health', 'health', 'health', 'health', 'health', '2018-07-16 08:31:53', '2018-07-16 08:31:53'),
(2, 1, 1, 1, 'Mental Health', 'mental health', 'mental health', 'mental health', 'mental health', '2018-07-16 08:31:53', '2018-07-16 08:31:53'),
(3, 1, 1, 1, 'Health Care', 'health care', 'health care', 'health care', 'health care', '2018-07-16 08:31:53', '2018-07-16 08:31:53'),
(4, 1, 1, 1, 'Nursing', 'nursing', 'nursing', 'nursing', 'nursing', '2018-07-16 08:31:54', '2018-07-16 08:31:54'),
(5, 1, 1, 1, 'Caregiving', 'caregiving', 'caregiving', 'caregiving', 'caregiving', '2018-07-16 08:31:54', '2018-07-16 08:31:54'),
(6, 1, 1, 1, 'Disease and Disorders', 'disease and disorders', 'disease and disorders', 'disease and disorders', 'disease and disorders', '2018-07-16 08:31:54', '2018-07-16 08:31:54'),
(7, 1, 1, 1, 'Pharmacology', 'pharmacology', 'pharmacology', 'pharmacology', 'pharmacology', '2018-07-16 08:31:54', '2018-07-16 08:31:54'),
(8, 1, 1, 1, 'Nutrition', 'nutrition', 'nutrition', 'nutrition', 'nutrition', '2018-07-16 08:31:54', '2018-07-16 08:31:54'),
(9, 1, 1, 1, 'Fitness', 'fitness', 'fitness', 'fitness', 'fitness', '2018-07-16 08:31:54', '2018-07-16 08:31:54'),
(10, 1, 1, 1, 'Yoga', 'yoga', 'yoga', 'yoga', 'yoga', '2018-07-16 08:31:54', '2018-07-16 08:31:54'),
(11, 0, 1, 1, 'Business', 'business', 'business', 'business', 'business', '2018-07-16 08:31:54', '2018-07-16 08:31:54'),
(12, 2, 1, 1, 'E-Commerce', 'e-commerce', 'e-commerce', 'e-commerce', 'e-commerce', '2018-07-16 08:31:54', '2018-07-16 08:31:54'),
(13, 2, 1, 1, 'Leadership and Management', 'leadership and management', 'leadership and management', 'leadership and management', 'leadership and management', '2018-07-16 08:31:54', '2018-07-16 08:31:54'),
(14, 2, 1, 1, 'Entrepreneurship', 'entrepreneurship', 'entrepreneurship', 'entrepreneurship', 'entrepreneurship', '2018-07-16 08:31:54', '2018-07-16 08:31:54'),
(15, 2, 1, 1, 'Project Management', 'project management', 'project management', 'project management', 'project management', '2018-07-16 08:31:54', '2018-07-16 08:31:54'),
(16, 2, 1, 1, 'Sales', 'sales', 'sales', 'sales', 'sales', '2018-07-16 08:31:54', '2018-07-16 08:31:54'),
(17, 2, 1, 1, 'Human Resources', 'human resources', 'human resources', 'human resources', 'human resources', '2018-07-16 08:31:54', '2018-07-16 08:31:54'),
(18, 2, 1, 1, 'Communications', 'communications', 'communications', 'communications', 'communications', '2018-07-16 08:31:54', '2018-07-16 08:31:54'),
(19, 2, 1, 1, 'Finance', 'finance', 'finance', 'finance', 'finance', '2018-07-16 08:31:54', '2018-07-16 08:31:54'),
(20, 2, 1, 1, 'Finances and Banking', 'finances and banking', 'finances and banking', 'finances and banking', 'finances and banking', '2018-07-16 08:31:54', '2018-07-16 08:31:54'),
(21, 2, 1, 1, 'Accounting', 'accounting', 'accounting', 'accounting', 'accounting', '2018-07-16 08:31:54', '2018-07-16 08:31:54'),
(22, 2, 1, 1, 'Operations', 'operations', 'operations', 'operations', 'operations', '2018-07-16 08:31:54', '2018-07-16 08:31:54'),
(23, 2, 1, 1, 'Risk Management', 'risk management', 'risk management', 'risk management', 'risk management', '2018-07-16 08:31:54', '2018-07-16 08:31:54'),
(24, 2, 1, 1, 'Service Management', 'service management', 'service management', 'service management', 'service management', '2018-07-16 08:31:54', '2018-07-16 08:31:54'),
(25, 2, 1, 1, 'Management and↵ Administration', 'management and↵ administration', 'management and↵ administration', 'management and↵ administration', 'management and↵ administration', '2018-07-16 08:31:54', '2018-07-16 08:31:54'),
(26, 2, 1, 1, 'Customer Service', 'customer service', 'customer service', 'customer service', 'customer service', '2018-07-16 08:31:55', '2018-07-16 08:31:55'),
(27, 2, 1, 1, 'Manufacturing', 'manufacturing', 'manufacturing', 'manufacturing', 'manufacturing', '2018-07-16 08:31:55', '2018-07-16 08:31:55'),
(28, 2, 1, 1, 'Health and Safety', 'health and safety', 'health and safety', 'health and safety', 'health and safety', '2018-07-16 08:31:55', '2018-07-16 08:31:55'),
(29, 2, 1, 1, 'Supply Chain Management', 'supply chain management', 'supply chain management', 'supply chain management', 'supply chain management', '2018-07-16 08:31:55', '2018-07-16 08:31:55'),
(30, 2, 1, 1, 'Quality Control', 'quality control', 'quality control', 'quality control', 'quality control', '2018-07-16 08:31:55', '2018-07-16 08:31:55'),
(31, 2, 1, 1, 'Business Process', 'business process', 'business process', 'business process', 'business process', '2018-07-16 08:31:55', '2018-07-16 08:31:55'),
(32, 2, 1, 1, 'Workplace Supervision', 'workplace supervision', 'workplace supervision', 'workplace supervision', 'workplace supervision', '2018-07-16 08:31:55', '2018-07-16 08:31:55'),
(33, 2, 1, 1, 'Critical Operations ', 'critical operations ', 'critical operations ', 'critical operations ', 'critical operations ', '2018-07-16 08:31:55', '2018-07-16 08:31:55'),
(34, 2, 1, 1, 'Tourism and Hospitality', 'tourism and hospitality', 'tourism and hospitality', 'tourism and hospitality', 'tourism and hospitality', '2018-07-16 08:31:55', '2018-07-16 08:31:55'),
(35, 0, 1, 1, 'Humanities', 'humanities', 'humanities', 'humanities', 'humanities', '2018-07-16 08:31:55', '2018-07-16 08:31:55'),
(36, 3, 1, 1, 'Psychology', 'psychology', 'psychology', 'psychology', 'psychology', '2018-07-16 08:31:55', '2018-07-16 08:31:55'),
(37, 3, 1, 1, 'Education', 'education', 'education', 'education', 'education', '2018-07-16 08:31:55', '2018-07-16 08:31:55'),
(38, 3, 1, 1, 'Media and Journalism', 'media and journalism', 'media and journalism', 'media and journalism', 'media and journalism', '2018-07-16 08:31:55', '2018-07-16 08:31:55'),
(39, 3, 1, 1, 'History', 'history', 'history', 'history', 'history', '2018-07-16 08:31:55', '2018-07-16 08:31:55'),
(40, 3, 1, 1, 'Economics', 'economics', 'economics', 'economics', 'economics', '2018-07-16 08:31:55', '2018-07-16 08:31:55'),
(41, 3, 1, 1, 'Politics', 'politics', 'politics', 'politics', 'politics', '2018-07-16 08:31:55', '2018-07-16 08:31:55'),
(42, 3, 1, 1, 'Sociology', 'sociology', 'sociology', 'sociology', 'sociology', '2018-07-16 08:31:55', '2018-07-16 08:31:55'),
(43, 3, 1, 1, 'Personal Development', 'personal development', 'personal development', 'personal development', 'personal development', '2018-07-16 08:31:55', '2018-07-16 08:31:55'),
(44, 3, 1, 1, 'Geography', 'geography', 'geography', 'geography', 'geography', '2018-07-16 08:31:55', '2018-07-16 08:31:55'),
(45, 3, 1, 1, 'Law', 'law', 'law', 'law', 'law', '2018-07-16 08:31:55', '2018-07-16 08:31:55'),
(46, 0, 1, 1, 'IT', 'it', 'it', 'it', 'it', '2018-07-16 08:31:55', '2018-07-16 08:31:55'),
(47, 4, 1, 1, 'Software Tools', 'software tools', 'software tools', 'software tools', 'software tools', '2018-07-16 08:31:56', '2018-07-16 08:31:56'),
(48, 4, 1, 1, 'IT Management', 'it management', 'it management', 'it management', 'it management', '2018-07-16 08:31:56', '2018-07-16 08:31:56'),
(49, 4, 1, 1, 'Mobile Apps', 'mobile apps', 'mobile apps', 'mobile apps', 'mobile apps', '2018-07-16 08:31:56', '2018-07-16 08:31:56'),
(50, 4, 1, 1, 'Network and Security', 'network and security', 'network and security', 'network and security', 'network and security', '2018-07-16 08:31:56', '2018-07-16 08:31:56'),
(51, 4, 1, 1, 'Software Engineering', 'software engineering', 'software engineering', 'software engineering', 'software engineering', '2018-07-16 08:31:56', '2018-07-16 08:31:56'),
(52, 4, 1, 1, 'Operating Systems', 'operating systems', 'operating systems', 'operating systems', 'operating systems', '2018-07-16 08:31:56', '2018-07-16 08:31:56'),
(53, 4, 1, 1, 'Hardware', 'hardware', 'hardware', 'hardware', 'hardware', '2018-07-16 08:31:56', '2018-07-16 08:31:56'),
(54, 4, 1, 1, 'Data Science', 'data science', 'data science', 'data science', 'data science', '2018-07-16 08:31:56', '2018-07-16 08:31:56'),
(55, 4, 1, 1, 'Software Development', 'software development', 'software development', 'software development', 'software development', '2018-07-16 08:31:56', '2018-07-16 08:31:56'),
(56, 4, 1, 1, 'Front End Languages', 'front end languages', 'front end languages', 'front end languages', 'front end languages', '2018-07-16 08:31:56', '2018-07-16 08:31:56'),
(57, 4, 1, 1, 'Back End Languages', 'back end languages', 'back end languages', 'back end languages', 'back end languages', '2018-07-16 08:31:56', '2018-07-16 08:31:56'),
(58, 4, 1, 1, 'Software Testing', 'software testing', 'software testing', 'software testing', 'software testing', '2018-07-16 08:31:56', '2018-07-16 08:31:56'),
(59, 4, 1, 1, 'Databases', 'databases', 'databases', 'databases', 'databases', '2018-07-16 08:31:56', '2018-07-16 08:31:56'),
(60, 4, 1, 1, 'Core IT Skills', 'core it skills', 'core it skills', 'core it skills', 'core it skills', '2018-07-16 08:31:56', '2018-07-16 08:31:56'),
(61, 4, 1, 1, 'Game Development', 'game development', 'game development', 'game development', 'game development', '2018-07-16 08:31:56', '2018-07-16 08:31:56'),
(62, 0, 1, 1, 'Language', 'language', 'language', 'language', 'language', '2018-07-16 08:31:56', '2018-07-16 08:31:56'),
(63, 5, 1, 1, 'English', 'english', 'english', 'english', 'english', '2018-07-16 08:31:56', '2018-07-16 08:31:56'),
(64, 5, 1, 1, 'Spanish', 'spanish', 'spanish', 'spanish', 'spanish', '2018-07-16 08:31:56', '2018-07-16 08:31:56'),
(65, 5, 1, 1, 'German', 'german', 'german', 'german', 'german', '2018-07-16 08:31:56', '2018-07-16 08:31:56'),
(66, 5, 1, 1, 'Irish', 'irish', 'irish', 'irish', 'irish', '2018-07-16 08:31:57', '2018-07-16 08:31:57'),
(67, 5, 1, 1, 'French', 'french', 'french', 'french', 'french', '2018-07-16 08:31:57', '2018-07-16 08:31:57'),
(68, 5, 1, 1, 'Chinese', 'chinese', 'chinese', 'chinese', 'chinese', '2018-07-16 08:31:57', '2018-07-16 08:31:57'),
(69, 5, 1, 1, 'Arabic', 'arabic', 'arabic', 'arabic', 'arabic', '2018-07-16 08:31:57', '2018-07-16 08:31:57'),
(70, 5, 1, 1, 'Swedish', 'swedish', 'swedish', 'swedish', 'swedish', '2018-07-16 08:31:57', '2018-07-16 08:31:57'),
(71, 5, 1, 1, 'Japanese', 'japanese', 'japanese', 'japanese', 'japanese', '2018-07-16 08:31:57', '2018-07-16 08:31:57'),
(72, 0, 1, 1, 'Lifestyle', 'lifestyle', 'lifestyle', 'lifestyle', 'lifestyle', '2018-07-16 08:31:57', '2018-07-16 08:31:57'),
(73, 6, 1, 1, 'Music', 'music', 'music', 'music', 'music', '2018-07-16 08:31:57', '2018-07-16 08:31:57'),
(74, 6, 1, 1, 'Literature', 'literature', 'literature', 'literature', 'literature', '2018-07-16 08:31:57', '2018-07-16 08:31:57'),
(75, 6, 1, 1, 'Skilled Trades', 'skilled trades', 'skilled trades', 'skilled trades', 'skilled trades', '2018-07-16 08:31:57', '2018-07-16 08:31:57'),
(76, 6, 1, 1, 'Motor', 'motor', 'motor', 'motor', 'motor', '2018-07-16 08:31:57', '2018-07-16 08:31:57'),
(77, 6, 1, 1, 'Plumbing', 'plumbing', 'plumbing', 'plumbing', 'plumbing', '2018-07-16 08:31:57', '2018-07-16 08:31:57'),
(78, 6, 1, 1, 'Electrical', 'electrical', 'electrical', 'electrical', 'electrical', '2018-07-16 08:31:57', '2018-07-16 08:31:57'),
(79, 6, 1, 1, 'Carpentry', 'carpentry', 'carpentry', 'carpentry', 'carpentry', '2018-07-16 08:31:57', '2018-07-16 08:31:57'),
(80, 6, 1, 1, 'Masonry', 'masonry', 'masonry', 'masonry', 'masonry', '2018-07-16 08:31:57', '2018-07-16 08:31:57'),
(81, 6, 1, 1, 'Food and Beverage', 'food and beverage', 'food and beverage', 'food and beverage', 'food and beverage', '2018-07-16 08:31:58', '2018-07-16 08:31:58'),
(82, 6, 1, 1, 'Art and Crafts', 'art and crafts', 'art and crafts', 'art and crafts', 'art and crafts', '2018-07-16 08:31:58', '2018-07-16 08:31:58'),
(83, 6, 1, 1, 'Photography', 'photography', 'photography', 'photography', 'photography', '2018-07-16 08:31:58', '2018-07-16 08:31:58'),
(84, 0, 1, 1, 'Marketing', 'marketing', 'marketing', 'marketing', 'marketing', '2018-07-16 08:31:58', '2018-07-16 08:31:58'),
(85, 7, 1, 1, 'Social Media Marketing', 'social media marketing', 'social media marketing', 'social media marketing', 'social media marketing', '2018-07-16 08:31:58', '2018-07-16 08:31:58'),
(86, 7, 1, 1, 'Marketing Management', 'marketing management', 'marketing management', 'marketing management', 'marketing management', '2018-07-16 08:31:58', '2018-07-16 08:31:58'),
(87, 7, 1, 1, 'Digital Marketing', 'digital marketing', 'digital marketing', 'digital marketing', 'digital marketing', '2018-07-16 08:31:58', '2018-07-16 08:31:58'),
(88, 7, 1, 1, 'Public Relations', 'public relations', 'public relations', 'public relations', 'public relations', '2018-07-16 08:31:58', '2018-07-16 08:31:58'),
(89, 0, 1, 1, 'Math', 'math', 'math', 'math', 'math', '2018-07-16 08:31:58', '2018-07-16 08:31:58'),
(90, 8, 1, 1, 'Core Maths Skills', 'core maths skills', 'core maths skills', 'core maths skills', 'core maths skills', '2018-07-16 08:31:58', '2018-07-16 08:31:58'),
(91, 8, 1, 1, 'Calculus', 'calculus', 'calculus', 'calculus', 'calculus', '2018-07-16 08:31:58', '2018-07-16 08:31:58'),
(92, 8, 1, 1, 'Probability and Statistics', 'probability and statistics', 'probability and statistics', 'probability and statistics', 'probability and statistics', '2018-07-16 08:31:58', '2018-07-16 08:31:58'),
(93, 8, 1, 1, 'Algebra', 'algebra', 'algebra', 'algebra', 'algebra', '2018-07-16 08:31:58', '2018-07-16 08:31:58'),
(94, 8, 1, 1, 'Geometry', 'geometry', 'geometry', 'geometry', 'geometry', '2018-07-16 08:31:58', '2018-07-16 08:31:58'),
(95, 8, 1, 1, 'Series and Sequences', 'series and sequences', 'series and sequences', 'series and sequences', 'series and sequences', '2018-07-16 08:31:58', '2018-07-16 08:31:58'),
(96, 8, 1, 1, 'Exam Prep', 'exam prep', 'exam prep', 'exam prep', 'exam prep', '2018-07-16 08:31:58', '2018-07-16 08:31:58'),
(97, 0, 1, 1, 'Science', 'science', 'science', 'science', 'science', '2018-07-16 08:31:58', '2018-07-16 08:31:58'),
(98, 9, 1, 1, 'Life Science', 'life science', 'life science', 'life science', 'life science', '2018-07-16 08:31:58', '2018-07-16 08:31:58'),
(99, 9, 1, 1, 'Environmental Studies', 'environmental studies', 'environmental studies', 'environmental studies', 'environmental studies', '2018-07-16 08:31:58', '2018-07-16 08:31:58'),
(100, 9, 1, 1, 'Physics', 'physics', 'physics', 'physics', 'physics', '2018-07-16 08:31:58', '2018-07-16 08:31:58'),
(101, 9, 1, 1, 'General Science', 'general science', 'general science', 'general science', 'general science', '2018-07-16 08:31:58', '2018-07-16 08:31:58'),
(102, 9, 1, 1, 'Chemistry', 'chemistry', 'chemistry', 'chemistry', 'chemistry', '2018-07-16 08:31:58', '2018-07-16 08:31:58'),
(103, 9, 1, 1, 'Engineering', 'engineering', 'engineering', 'engineering', 'engineering', '2018-07-16 08:31:58', '2018-07-16 08:31:58');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(10) UNSIGNED NOT NULL,
  `republished_course_id` int(11) DEFAULT NULL,
  `course_type_id` int(11) NOT NULL,
  `trending` int(11) DEFAULT NULL,
  `responsive` int(11) DEFAULT NULL,
  `avg_duration` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `headline` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `locale` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'ka',
  `rating` int(11) NOT NULL DEFAULT '1',
  `enrolled` int(11) NOT NULL DEFAULT '1',
  `outcome` text COLLATE utf8mb4_unicode_ci,
  `certification` text COLLATE utf8mb4_unicode_ci,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_slug` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `certified` int(11) DEFAULT NULL,
  `parent_category_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_category_slug` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `root_category_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `root_category_slug` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` int(11) DEFAULT NULL,
  `environment` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `courseImgUrl` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `points` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `republished_course_id`, `course_type_id`, `trending`, `responsive`, `avg_duration`, `name`, `slug`, `headline`, `locale`, `rating`, `enrolled`, `outcome`, `certification`, `description`, `category_name`, `category_slug`, `certified`, `parent_category_name`, `parent_category_slug`, `root_category_name`, `root_category_slug`, `level`, `environment`, `courseImgUrl`, `points`, `created_at`, `updated_at`) VALUES
(4, 0, 0, 1, 1, '23', 'I', 'i', 'Dolores ratione et ducimus voluptatem rerum mollitia dolores possimus.', 'es_CL', 1, 884, 'iure praesentium consequuntur eum aut odit aperiam est laudantium voluptatem est et sit sed nam consequatur dolorum sed facilis velit facilis id aperiam veritatis est aut quae est odit quisquam nesciunt ratione quidem rerum consequatur nemo aut ea perferendis itaque qui reiciendis adipisci totam nam eum sunt ut ratione totam unde voluptas sed qui autem qui ut eum tenetur omnis rem quas assumenda voluptatem non qui voluptatem quia a laudantium ullam dolor earum provident hic magnam aut nihil nihil ut ea minima autem illo suscipit voluptatibus qui et consequatur voluptas est enim aut amet hic dicta iure voluptatibus quis dolor architecto nesciunt facilis quas aut id et ab commodi optio magni quia repellat sed ipsum vero voluptas natus consequatur non id reiciendis ut quam explicabo sit officiis amet consequatur rerum quae qui id nostrum saepe dolorum ratione repellat voluptatem voluptas ea perspiciatis sit in voluptas autem aut itaque cupiditate sed qui voluptatum eius cumque suscipit nesciunt aliquam fugiat quod repellat sed omnis et eaque vel assumenda cumque laboriosam et et dolores similique ex iure voluptatem numquam maiores perferendis voluptatem quia tempore consequatur voluptas commodi iusto vero aut rerum aut voluptate quae eum voluptatum voluptatibus et similique aliquid iure animi officiis saepe aliquid at consequatur omnis voluptatibus facilis quos facilis eum', 'aut optio molestiae qui et voluptatem in maiores vel labore minus est nam ut ipsam quod et corporis et nisi ea quam nobis molestias culpa velit molestiae consequatur ipsum quia vero dolorem adipisci omnis similique et perferendis reiciendis occaecati eos dolorem voluptate temporibus asperiores facere est magnam omnis dolorem sequi esse inventore ea labore quos quo aut quos beatae culpa quis non id ea eligendi est reiciendis harum nemo qui cum sit ut soluta ipsam natus perspiciatis error est vel vel consequuntur tenetur ut aliquid sequi rerum et ea enim totam aliquam vero aut quia totam temporibus quia voluptas ipsam alias fugit ut sed consequuntur et enim animi dolores eos quia ea iste ut esse rerum mollitia necessitatibus est omnis molestiae rerum molestias nostrum facere dolorem qui ut voluptas beatae possimus amet ut ea dolorem rerum qui totam laboriosam quo cupiditate id sunt mollitia consequuntur odit neque libero exercitationem aut non qui qui architecto earum et quam consequatur minus in provident omnis enim et officia neque facere voluptas facilis alias voluptatibus debitis possimus enim aspernatur ea eos sit hic nam temporibus harum voluptate voluptatem voluptatem ut sit veniam eos in ut est ex enim quo ut cum et harum adipisci', '<p>sint autem eius consequatur dolore</p>', '2,5', '2-5', 770, '0', '0', '0', '0', 1, 'optio', 'https://lorempixel.com/640/480?43521', 6, '2018-07-13 08:42:22', '2018-08-08 06:51:19'),
(5, 0, 0, 1, 1, '23', 'II', 'ii', 'Dolores ratione et ducimus voluptatem rerum mollitia dolores possimus.', 'es_CL', 1, 884, 'iure praesentium consequuntur eum aut odit aperiam est laudantium voluptatem est et sit sed nam consequatur dolorum sed facilis velit facilis id aperiam veritatis est aut quae est odit quisquam nesciunt ratione quidem rerum consequatur nemo aut ea perferendis itaque qui reiciendis adipisci totam nam eum sunt ut ratione totam unde voluptas sed qui autem qui ut eum tenetur omnis rem quas assumenda voluptatem non qui voluptatem quia a laudantium ullam dolor earum provident hic magnam aut nihil nihil ut ea minima autem illo suscipit voluptatibus qui et consequatur voluptas est enim aut amet hic dicta iure voluptatibus quis dolor architecto nesciunt facilis quas aut id et ab commodi optio magni quia repellat sed ipsum vero voluptas natus consequatur non id reiciendis ut quam explicabo sit officiis amet consequatur rerum quae qui id nostrum saepe dolorum ratione repellat voluptatem voluptas ea perspiciatis sit in voluptas autem aut itaque cupiditate sed qui voluptatum eius cumque suscipit nesciunt aliquam fugiat quod repellat sed omnis et eaque vel assumenda cumque laboriosam et et dolores similique ex iure voluptatem numquam maiores perferendis voluptatem quia tempore consequatur voluptas commodi iusto vero aut rerum aut voluptate quae eum voluptatum voluptatibus et similique aliquid iure animi officiis saepe aliquid at consequatur omnis voluptatibus facilis quos facilis eum', 'aut optio molestiae qui et voluptatem in maiores vel labore minus est nam ut ipsam quod et corporis et nisi ea quam nobis molestias culpa velit molestiae consequatur ipsum quia vero dolorem adipisci omnis similique et perferendis reiciendis occaecati eos dolorem voluptate temporibus asperiores facere est magnam omnis dolorem sequi esse inventore ea labore quos quo aut quos beatae culpa quis non id ea eligendi est reiciendis harum nemo qui cum sit ut soluta ipsam natus perspiciatis error est vel vel consequuntur tenetur ut aliquid sequi rerum et ea enim totam aliquam vero aut quia totam temporibus quia voluptas ipsam alias fugit ut sed consequuntur et enim animi dolores eos quia ea iste ut esse rerum mollitia necessitatibus est omnis molestiae rerum molestias nostrum facere dolorem qui ut voluptas beatae possimus amet ut ea dolorem rerum qui totam laboriosam quo cupiditate id sunt mollitia consequuntur odit neque libero exercitationem aut non qui qui architecto earum et quam consequatur minus in provident omnis enim et officia neque facere voluptas facilis alias voluptatibus debitis possimus enim aspernatur ea eos sit hic nam temporibus harum voluptate voluptatem voluptatem ut sit veniam eos in ut est ex enim quo ut cum et harum adipisci', '<p>sint autem eius consequatur dolore</p>', '2', '2', 770, '0', '0', '0', '0', 1, 'optio', 'https://lorempixel.com/640/480/?43928', 6, '2018-07-13 08:42:22', '2018-08-08 06:43:46');

-- --------------------------------------------------------

--
-- Table structure for table `ctas`
--

CREATE TABLE `ctas` (
  `id` int(10) UNSIGNED NOT NULL,
  `status` int(11) NOT NULL,
  `image` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `linkTitle` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logoTitle` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(69, '2014_10_12_000000_create_users_table', 1),
(70, '2014_10_12_100000_create_password_resets_table', 1),
(71, '2018_06_05_115312_create_nav_table', 1),
(72, '2018_06_06_144121_create_categories_table', 1),
(73, '2018_06_07_103000_create_languages_table', 1),
(74, '2018_06_07_103157_create_courses_table', 1),
(75, '2018_06_11_123934_create_sliders_table', 1),
(76, '2018_06_11_125120_create_ctas_table', 1),
(77, '2018_06_28_070755_create_short_courses_table', 1),
(80, '2018_07_20_105844_create_resources_table', 2),
(83, '2018_08_03_075808_create_one_courses_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `nav`
--

CREATE TABLE `nav` (
  `id` int(10) UNSIGNED NOT NULL,
  `alias` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `one_courses`
--

CREATE TABLE `one_courses` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `title` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` int(11) NOT NULL,
  `text` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `one_courses`
--

INSERT INTO `one_courses` (`id`, `user_id`, `course_id`, `title`, `position`, `text`, `created_at`, `updated_at`) VALUES
(66, 1, 5, 'პირველი', 1, '', '2018-08-08 06:32:44', '2018-08-08 06:32:44'),
(68, 1, 5, 'მეორე', 1, '', '2018-08-08 06:35:02', '2018-08-08 06:35:02');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `resources`
--

CREATE TABLE `resources` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `res_link` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `resources`
--

INSERT INTO `resources` (`id`, `user_id`, `course_id`, `name`, `desc`, `res_link`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 'Adella Medhurst', 'Pariatur vel tempora alias voluptate dolor.', 'https://lorempixel.com/640/480/?58982', '2018-07-20 07:23:14', '2018-07-20 07:23:14'),
(2, 1, 10, 'Jairo Nicolas', 'Rerum iusto aliquam repudiandae.', 'https://lorempixel.com/640/480/?54453', '2018-07-20 07:23:14', '2018-07-20 07:23:14'),
(3, 3, 6, 'Leila Gaylord', 'Doloribus in voluptatem magnam.', 'https://lorempixel.com/640/480/?98902', '2018-07-20 07:23:14', '2018-07-20 07:23:14'),
(4, 2, 9, 'Jayne Kuhic Jr.', 'Facere beatae consequatur tempore aliquam atque veritatis.', 'https://lorempixel.com/640/480/?63190', '2018-07-20 07:23:14', '2018-07-20 07:23:14'),
(5, 1, 5, 'Gudrun Nitzsche', 'Repellat autem qui qui sit illo.', 'https://lorempixel.com/640/480/?91361', '2018-07-20 07:23:14', '2018-07-20 07:23:14'),
(6, 3, 6, 'Prof. Brennon Kuvalis III', 'Accusamus saepe omnis voluptas laboriosam.', 'https://lorempixel.com/640/480/?31744', '2018-07-20 07:23:14', '2018-07-20 07:23:14'),
(7, 1, 7, 'Dr. Anastasia Weber IV', 'Ratione dolore veniam eum.', 'https://lorempixel.com/640/480/?85437', '2018-07-20 07:23:14', '2018-07-20 07:23:14'),
(8, 2, 6, 'Jewel Corkery II', 'Voluptas saepe sed dicta.', 'https://lorempixel.com/640/480/?30256', '2018-07-20 07:23:14', '2018-07-20 07:23:14'),
(9, 2, 5, 'Dan Schumm', 'Ut ipsum eveniet.', 'https://lorempixel.com/640/480/?57715', '2018-07-20 07:23:14', '2018-07-20 07:23:14'),
(10, 3, 2, 'Mrs. Emmalee Hilll', 'Aut rerum voluptatibus ad.', 'https://lorempixel.com/640/480/?42552', '2018-07-20 07:23:14', '2018-07-20 07:23:14'),
(11, 1, 5, 'Kamille Kerluke', 'Tempore autem.', 'https://lorempixel.com/640/480/?73501', '2018-07-20 07:43:26', '2018-07-20 07:43:26'),
(12, 1, 4, 'Prof. Gabriel Bergnaum Sr.', 'Numquam voluptatum repudiandae autem.', 'https://lorempixel.com/640/480/?88257', '2018-07-20 07:43:26', '2018-07-20 07:43:26'),
(13, 2, 4, 'Randi Gibson', 'Consequuntur distinctio molestiae placeat.', 'https://lorempixel.com/640/480/?56868', '2018-07-20 07:43:26', '2018-07-20 07:43:26'),
(14, 2, 2, 'Prof. Morgan Muller DDS', 'Placeat maxime dolor hic commodi dolore fugit.', 'https://lorempixel.com/640/480/?91157', '2018-07-20 07:43:26', '2018-07-20 07:43:26'),
(15, 2, 5, 'Dr. Spencer Feil', 'Quo et dolor.', 'https://lorempixel.com/640/480/?11600', '2018-07-20 07:43:26', '2018-07-20 07:43:26'),
(16, 1, 10, 'Prof. Jocelyn Glover Sr.', 'A qui sint voluptatem.', 'https://lorempixel.com/640/480/?29037', '2018-07-20 07:43:26', '2018-07-20 07:43:26'),
(17, 1, 9, 'Jeanne Ullrich', 'Optio nostrum inventore quis.', 'https://lorempixel.com/640/480/?27136', '2018-07-20 07:43:26', '2018-07-20 07:43:26'),
(18, 3, 5, 'Delilah Corkery', 'Illo iure exercitationem corrupti.', 'https://lorempixel.com/640/480/?99155', '2018-07-20 07:43:26', '2018-07-20 07:43:26'),
(19, 2, 8, 'Laney Boyle', 'Et aut aliquid id et veritatis molestiae.', 'https://lorempixel.com/640/480/?75652', '2018-07-20 07:43:26', '2018-07-20 07:43:26'),
(20, 1, 1, 'Prof. Darrin Mertz DDS', 'Adipisci illum aliquam ullam voluptatum.', 'https://lorempixel.com/640/480/?71515', '2018-07-20 07:43:26', '2018-07-20 07:43:26'),
(21, 1, 1, 'Willa King', 'Asperiores et.', 'https://lorempixel.com/640/480/?98569', '2018-07-20 07:43:29', '2018-07-20 07:43:29'),
(22, 2, 2, 'Hardy Rosenbaum', 'Et quam consequatur dicta.', 'https://lorempixel.com/640/480/?79331', '2018-07-20 07:43:30', '2018-07-20 07:43:30'),
(23, 3, 4, 'Estel Lowe', 'Earum quae nisi quae.', 'https://lorempixel.com/640/480/?85570', '2018-07-20 07:43:30', '2018-07-20 07:43:30'),
(24, 1, 5, 'Irving Rice', 'Tempore nulla eum atque eligendi beatae quis.', 'https://lorempixel.com/640/480/?33296', '2018-07-20 07:43:30', '2018-07-20 07:43:30'),
(25, 3, 4, 'Antone Roberts', 'Non veniam neque maiores.', 'https://lorempixel.com/640/480/?30763', '2018-07-20 07:43:30', '2018-07-20 07:43:30'),
(26, 2, 8, 'Freeman Predovic', 'Aut pariatur provident molestiae.', 'https://lorempixel.com/640/480/?46515', '2018-07-20 07:43:30', '2018-07-20 07:43:30'),
(27, 3, 8, 'Ms. Hannah Fritsch', 'Voluptatem placeat ut sit.', 'https://lorempixel.com/640/480/?57395', '2018-07-20 07:43:30', '2018-07-20 07:43:30'),
(28, 2, 8, 'Lydia Treutel', 'Et libero et debitis et consectetur.', 'https://lorempixel.com/640/480/?57170', '2018-07-20 07:43:30', '2018-07-20 07:43:30'),
(29, 1, 3, 'Darius Ledner', 'Enim rem qui et laborum.', 'https://lorempixel.com/640/480/?65716', '2018-07-20 07:43:30', '2018-07-20 07:43:30'),
(30, 3, 3, 'Devan Blanda IV', 'Cum quis fugiat voluptas et.', 'https://lorempixel.com/640/480/?30550', '2018-07-20 07:43:30', '2018-07-20 07:43:30');

-- --------------------------------------------------------

--
-- Table structure for table `short_courses`
--

CREATE TABLE `short_courses` (
  `id` int(10) UNSIGNED NOT NULL,
  `img` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sliders`
--

CREATE TABLE `sliders` (
  `id` int(10) UNSIGNED NOT NULL,
  `text` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL,
  `position` int(11) NOT NULL,
  `image` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `lastname`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'david', 'chincharashvili', 'david@gmail.com', '$2y$10$AvhbQc/0KTp9sXoA7kOmROM17FW.Deer5UOHZOJF8T3MmXdRnOyKG', 'eIabXSzBhpjHEWRNHpkEHiuvdvlfvl2isqImixPv', '2018-07-16 04:56:17', '2018-07-16 04:56:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ctas`
--
ALTER TABLE `ctas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nav`
--
ALTER TABLE `nav`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `one_courses`
--
ALTER TABLE `one_courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `resources`
--
ALTER TABLE `resources`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `short_courses`
--
ALTER TABLE `short_courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `ctas`
--
ALTER TABLE `ctas`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `nav`
--
ALTER TABLE `nav`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `one_courses`
--
ALTER TABLE `one_courses`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `resources`
--
ALTER TABLE `resources`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `short_courses`
--
ALTER TABLE `short_courses`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
