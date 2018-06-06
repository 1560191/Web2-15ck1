-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 06, 2018 at 03:34 PM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `web2`
--

-- --------------------------------------------------------

--
-- Table structure for table `khachhang`
--

CREATE TABLE IF NOT EXISTS `khachhang` (
  `ID` varchar(30) NOT NULL,
  `IDNguoidanhgia` varchar(30) NOT NULL,
  `Diemdanhgia` int(11) NOT NULL,
  `Nhanxet` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Danhsachyeuthich` int(11) DEFAULT NULL,
  `Sanphamdangban` int(11) DEFAULT NULL,
  `Sanphamdaban` int(11) DEFAULT NULL,
  `Sanphamdadaugia` int(11) DEFAULT NULL,
  `Sanphamdathang` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `khachhang`
--

INSERT INTO `khachhang` (`ID`, `IDNguoidanhgia`, `Diemdanhgia`, `Nhanxet`, `Danhsachyeuthich`, `Sanphamdangban`, `Sanphamdaban`, `Sanphamdadaugia`, `Sanphamdathang`) VALUES
('user1@gmail.com', 'user2@gmail.com', 10, 'good', 1, 2, 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `quanly`
--

CREATE TABLE IF NOT EXISTS `quanly` (
  `Email` varchar(30) NOT NULL DEFAULT '',
  `Password` varchar(30) NOT NULL,
  `Hoten` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Diachi` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

CREATE TABLE IF NOT EXISTS `sanpham` (
`ID` int(10) NOT NULL,
  `Ten` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Phanloai` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Hinhanh` varchar(30) NOT NULL,
  `Giakhoidiem` bigint(20) NOT NULL,
  `Giahientai` bigint(20) NOT NULL,
  `Buocgia` bigint(20) NOT NULL,
  `Giabanngay` bigint(20) DEFAULT NULL,
  `Soluotragia` int(11) DEFAULT NULL,
  `Thoigianbatdau` date NOT NULL,
  `Thoigianketthuc` date NOT NULL,
  `Mota` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Nguoiban` varchar(30) NOT NULL,
  `Nguoimua` varchar(30) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sanpham`
--

INSERT INTO `sanpham` (`ID`, `Ten`, `Phanloai`, `Hinhanh`, `Giakhoidiem`, `Giahientai`, `Buocgia`, `Giabanngay`, `Soluotragia`, `Thoigianbatdau`, `Thoigianketthuc`, `Mota`, `Nguoiban`, `Nguoimua`) VALUES
(1, 'San Pham 1', 'Ba Lo', 'img/1.jpg', 100000, 100000, 10000, 500000, NULL, '2018-06-02', '2018-06-09', 'Day la mo ta', 'user1@gmail.com', NULL),
(2, 'San Pham 2', 'Ba Lo', 'img/2.jpg', 100000, 100000, 10000, 500000, NULL, '2018-06-02', '2018-06-09', 'Day la mo ta', 'user1@gmail.com', NULL),
(3, 'San Pham 3', 'Ba Lo', 'img/3.jpg', 100000, 100000, 10000, 500000, NULL, '2018-06-02', '2018-06-09', 'Day la mo ta', 'user1@gmail.com', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `taikhoan`
--

CREATE TABLE IF NOT EXISTS `taikhoan` (
  `Email` varchar(30) NOT NULL DEFAULT '',
  `Password` varchar(30) NOT NULL,
  `Hoten` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Diachi` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `taikhoan`
--

INSERT INTO `taikhoan` (`Email`, `Password`, `Hoten`, `Diachi`) VALUES
('admin@gmail.com', '123', 'admin', '123456'),
('user1@gmail.com', '123', 'user 1', 'hcm'),
('user2@gmail.com', '123', 'user 2', 'hcm');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `khachhang`
--
ALTER TABLE `khachhang`
 ADD KEY `Sanphamdaban` (`Sanphamdaban`), ADD KEY `Sanphamdangban` (`Sanphamdangban`), ADD KEY `Sanphamdadaugia` (`Sanphamdadaugia`), ADD KEY `Sanphamdathang` (`Sanphamdathang`), ADD KEY `ID` (`ID`), ADD KEY `IDNguoidanhgia` (`IDNguoidanhgia`), ADD KEY `Danhsachyeuthich` (`Danhsachyeuthich`);

--
-- Indexes for table `quanly`
--
ALTER TABLE `quanly`
 ADD PRIMARY KEY (`Email`);

--
-- Indexes for table `sanpham`
--
ALTER TABLE `sanpham`
 ADD PRIMARY KEY (`ID`), ADD KEY `Nguoiban` (`Nguoiban`), ADD KEY `Nguoimua` (`Nguoimua`);

--
-- Indexes for table `taikhoan`
--
ALTER TABLE `taikhoan`
 ADD PRIMARY KEY (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sanpham`
--
ALTER TABLE `sanpham`
MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `khachhang`
--
ALTER TABLE `khachhang`
ADD CONSTRAINT `khachhang_ibfk_1` FOREIGN KEY (`Sanphamdaban`) REFERENCES `sanpham` (`ID`),
ADD CONSTRAINT `khachhang_ibfk_2` FOREIGN KEY (`Sanphamdangban`) REFERENCES `sanpham` (`ID`),
ADD CONSTRAINT `khachhang_ibfk_3` FOREIGN KEY (`Sanphamdadaugia`) REFERENCES `sanpham` (`ID`),
ADD CONSTRAINT `khachhang_ibfk_4` FOREIGN KEY (`Sanphamdathang`) REFERENCES `sanpham` (`ID`),
ADD CONSTRAINT `khachhang_ibfk_5` FOREIGN KEY (`ID`) REFERENCES `taikhoan` (`Email`),
ADD CONSTRAINT `khachhang_ibfk_6` FOREIGN KEY (`IDNguoidanhgia`) REFERENCES `taikhoan` (`Email`),
ADD CONSTRAINT `khachhang_ibfk_7` FOREIGN KEY (`Danhsachyeuthich`) REFERENCES `sanpham` (`ID`);

--
-- Constraints for table `sanpham`
--
ALTER TABLE `sanpham`
ADD CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`Nguoiban`) REFERENCES `taikhoan` (`Email`),
ADD CONSTRAINT `sanpham_ibfk_2` FOREIGN KEY (`Nguoimua`) REFERENCES `taikhoan` (`Email`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
