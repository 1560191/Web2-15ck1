-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 15, 2018 lúc 12:02 CH
-- Phiên bản máy phục vụ: 5.7.14
-- Phiên bản PHP: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `web2`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhmuc`
--

CREATE TABLE `danhmuc` (
  `IDdanhmuc` int(11) NOT NULL,
  `danhmucsp` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `daugia`
--

CREATE TABLE `daugia` (
  `ID` int(11) NOT NULL,
  `IDnguoimua` int(11) DEFAULT NULL,
  `IDSP` int(11) DEFAULT NULL,
  `thoigian` date NOT NULL,
  `Gia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sanpham`
--

CREATE TABLE `sanpham` (
  `ID` int(11) NOT NULL,
  `Ten` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Phanloai` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Hinhanh` varchar(30) NOT NULL,
  `Giakhoidiem` bigint(20) NOT NULL,
  `Giahientai` bigint(20) NOT NULL,
  `Buocgia` bigint(20) NOT NULL,
  `Giabanngay` bigint(20) DEFAULT NULL,
  `Soluotragia` int(11) DEFAULT NULL,
  `Thoigianbatdau` datetime NOT NULL,
  `Thoigianketthuc` datetime NOT NULL,
  `Mota` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Nguoiban` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `sanpham`
--

INSERT INTO `sanpham` (`ID`, `Ten`, `Phanloai`, `Hinhanh`, `Giakhoidiem`, `Giahientai`, `Buocgia`, `Giabanngay`, `Soluotragia`, `Thoigianbatdau`, `Thoigianketthuc`, `Mota`, `Nguoiban`) VALUES
(1, 'San Pham 1', 'Ba Lo', 'img/1.jpg', 100000, 100000, 10000, 500000, 1, '2018-06-14 00:00:00', '2018-06-21 00:00:00', 'Day la mo ta', 'user1@gmail.com'),
(2, 'San Pham 2', 'Ba Lo', 'img/2.jpg', 100000, 100000, 10000, 500000, 3, '2018-06-14 00:00:00', '2018-06-21 00:00:00', 'Day la mo ta', 'user1@gmail.com'),
(3, 'San Pham 3', 'Ba Lo', 'img/3.jpg', 100000, 100000, 10000, 500000, 2, '2018-06-14 00:00:00', '2018-06-21 00:00:00', 'Day la mo ta', 'user1@gmail.com'),
(4, 'San Pham 4', 'Ba Lo', 'img/4.jpg', 100000, 100000, 10000, 500000, 10, '2018-06-14 00:00:00', '2018-06-21 00:00:00', 'Day la mo ta', 'user1@gmail.com'),
(5, 'San Pham 5', 'Ba Lo', 'img/5.jpg', 100000, 100000, 10000, 500000, 5, '2018-06-14 00:00:00', '2018-06-21 00:00:00', 'Day la mo ta', 'user1@gmail.com'),
(6, 'San Pham 6', 'Ba Lo', 'img/6.jpg', 100000, 100000, 10000, 500000, 1, '2018-06-14 00:00:00', '2018-06-21 00:00:00', 'Day la mo ta', 'user1@gmail.com'),
(7, 'San Pham 7', 'Ba Lo', 'img/7.jpg', 100000, 100000, 10000, 500000, 4, '2018-06-14 00:00:00', '2018-06-21 00:00:00', 'Day la mo ta', 'user1@gmail.com'),
(8, 'San Pham 8', 'Ba Lo', 'img/8.jpg', 100000, 100000, 10000, 500000, 13, '2018-06-14 00:00:00', '2018-06-21 00:00:00', 'Day la mo ta', 'user1@gmail.com'),
(9, 'San Pham 9', 'Ba Lo', 'img/9.jpg', 100000, 100000, 10000, 500000, 11, '2018-06-14 00:00:00', '2018-06-21 00:00:00', 'Day la mo ta', 'user1@gmail.com'),
(10, 'San Pham 10', 'Ba Lo', 'img/10.jpg', 100000, 100000, 10000, 500000, 14, '2018-06-14 00:00:00', '2018-06-21 00:00:00', 'Day la mo ta', 'user1@gmail.com'),
(11, 'San Pham 11', 'Ba Lo', 'img/11.jpg', 100000, 100000, 10000, 500000, 12, '2018-06-14 00:00:00', '2018-06-21 00:00:00', 'Day la mo ta', 'user1@gmail.com'),
(12, 'San Pham 12', 'Ba Lo', 'img/12.jpg', 100000, 100000, 10000, 500000, 2, '2018-06-14 00:00:00', '2018-06-21 00:00:00', 'Day la mo ta', 'user1@gmail.com'),
(13, 'San Pham 13', 'Ba Lo', 'img/13.jpg', 100000, 100000, 10000, 500000, 9, '2018-06-14 00:00:00', '2018-06-21 00:00:00', 'Day la mo ta', 'user1@gmail.com)'),
(14, 'San Pham 14', 'Ba Lo', 'img/14.jpg', 100000, 100000, 10000, 500000, 6, '2018-06-14 00:00:00', '2018-06-21 00:00:00', 'Day la mo ta', 'user1@gmail.com'),
(15, 'San Pham 15', 'Ba Lo', 'img/15.jpg', 100000, 100000, 10000, 500000, 4, '2018-06-14 00:00:00', '2018-06-21 00:00:00', 'Day la mo ta', 'user1@gmail.com'),
(16, 'San Pham 16', 'Ba Lo', 'img/16.jpg', 900000, 1000000, 100000, 5000000, 1, '2018-06-14 00:00:00', '2018-06-21 00:00:00', 'Day la mo ta', 'user1@gmail.com');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan`
--

CREATE TABLE `taikhoan` (
  `Email` varchar(255) NOT NULL DEFAULT '',
  `Password` varchar(255) NOT NULL,
  `Hoten` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Diachi` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `SDT` int(11) NOT NULL,
  `Active` int(1) NOT NULL,
  `KhoiTao` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Permission` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `taikhoan`
--

INSERT INTO `taikhoan` (`Email`, `Password`, `Hoten`, `Diachi`, `SDT`, `Active`, `KhoiTao`, `Permission`) VALUES
('admin@gmail.com', '123', 'admin', '123456', 0, 0, '2018-06-09 14:15:31', 3),
('user1@gmail.com', '123', 'user 1', 'hcm', 0, 0, '2018-06-09 14:15:31', 1),
('user2@gmail.com', '123', 'user 2', 'hcm', 0, 0, '2018-06-09 14:15:31', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `xinban`
--

CREATE TABLE `xinban` (
  `ID` int(11) NOT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Active` int(1) DEFAULT NULL,
  `thoigianbatdau` datetime DEFAULT CURRENT_TIMESTAMP,
  `thoigianketthuc` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `yeuthich`
--

CREATE TABLE `yeuthich` (
  `Email` varchar(255) DEFAULT NULL,
  `ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  ADD PRIMARY KEY (`IDdanhmuc`);

--
-- Chỉ mục cho bảng `daugia`
--
ALTER TABLE `daugia`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`Email`);

--
-- Chỉ mục cho bảng `xinban`
--
ALTER TABLE `xinban`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  MODIFY `IDdanhmuc` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT cho bảng `daugia`
--
ALTER TABLE `daugia`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT cho bảng `xinban`
--
ALTER TABLE `xinban`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
