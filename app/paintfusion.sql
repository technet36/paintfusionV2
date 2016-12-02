-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 02, 2016 at 10:26 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `paintfusion`
--

-- --------------------------------------------------------

--
-- Table structure for table `match_t`
--

CREATE TABLE IF NOT EXISTS `match_t` (
  `id_match` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `tournament_type` enum('BO1','BO3','BO5','groupe stage') COLLATE utf8_unicode_ci NOT NULL,
  `winner_to_match` int(8) unsigned NOT NULL COMMENT 'id of the next match of the winner of this one',
  `looser_to_match` int(8) unsigned NOT NULL COMMENT 'id of the next match of the looser of this one',
  `note` varchar(535) COLLATE utf8_unicode_ci DEFAULT NULL,
  `privacy_lvl` tinyint(4) DEFAULT NULL,
  `id_tournament` int(10) unsigned NOT NULL,
  `id_riot_game` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id_match`),
  UNIQUE KEY `id_riot_game` (`id_riot_game`),
  KEY `id_tournament` (`id_tournament`),
  KEY `winner_to_match` (`winner_to_match`),
  KEY `looser_to_match` (`looser_to_match`),
  KEY `id_match` (`id_match`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `match_to_team`
--

CREATE TABLE IF NOT EXISTS `match_to_team` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_team` mediumint(8) unsigned NOT NULL,
  `id_match` int(10) unsigned NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `id_team` (`id_team`,`id_match`),
  KEY `id_match` (`id_match`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `team_t`
--

CREATE TABLE IF NOT EXISTS `team_t` (
  `id_team` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `nom_team` varchar(65) CHARACTER SET utf8 NOT NULL DEFAULT 'unknown',
  `premade` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0=no, 1= yes',
  `points` int(11) DEFAULT NULL,
  `group` char(1) COLLATE utf8_unicode_ci DEFAULT NULL,
  `privacy_lvl` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id_team`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `team_to_user`
--

CREATE TABLE IF NOT EXISTS `team_to_user` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_team` mediumint(8) unsigned NOT NULL,
  `id_user` int(10) unsigned NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '1=player, 0=substitute',
  `champ1` tinyint(3) unsigned DEFAULT NULL,
  `champ2` tinyint(3) unsigned DEFAULT NULL,
  `champ3` tinyint(3) unsigned DEFAULT NULL,
  `post_pref` enum('Top','Jungle','Mid','ADC','Support','AFK','Troll','Feed','nevermind') CHARACTER SET utf8 NOT NULL DEFAULT 'nevermind',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `champ1` (`champ1`,`champ2`,`champ3`),
  KEY `id_team` (`id_team`,`id_user`),
  KEY `id_user` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tournament_t`
--

CREATE TABLE IF NOT EXISTS `tournament_t` (
  `id_tournament` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tournament_name` varchar(65) CHARACTER SET utf8 NOT NULL,
  `state` tinyint(4) DEFAULT NULL,
  `host` varchar(65) COLLATE utf8_unicode_ci NOT NULL,
  `privacy_lvl` tinyint(3) unsigned DEFAULT NULL,
  `tournament_type` tinyint(3) unsigned DEFAULT NULL COMMENT '0= knockout, 1=knockout+looser bracket, 3=groupestage+knockout',
  `max_player` smallint(5) unsigned DEFAULT NULL COMMENT 'NULL= unlimited',
  `map` enum('SUMMONERS_RIFT','TWISTED8TREELINE','HOWLING_ABYSS') CHARACTER SET utf8 NOT NULL DEFAULT 'SUMMONERS_RIFT',
  `date` bigint(20) NOT NULL,
  `registration _max_date` bigint(20) NOT NULL,
  `note` varchar(535) CHARACTER SET utf8 DEFAULT NULL,
  `id_riot_tournament` int(10) unsigned DEFAULT NULL,
  `server` enum('EUW','NA','OCE','KR') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'EUW',
  PRIMARY KEY (`id_tournament`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=12 ;

--
-- Dumping data for table `tournament_t`
--

INSERT INTO `tournament_t` (`id_tournament`, `tournament_name`, `state`, `host`, `privacy_lvl`, `tournament_type`, `max_player`, `map`, `date`, `registration _max_date`, `note`, `id_riot_tournament`, `server`) VALUES
(1, 'test', 1, 'moi', 1, 1, 11, '', 20161123000000, 20161115000000, 'my note', 0, 'EUW'),
(2, 'monTournois', 1, 'moi', 0, 0, 0, '', 0, 0, '', NULL, 'EUW'),
(3, 'monTournois', 1, 'moi', 1, 1, 64, '', 20161123000000, 20161122000000, 'best tournament ever', NULL, 'EUW'),
(4, 'monTournois', 1, 'moi', 1, 1, 64, '', 20161123000000, 20161122000000, 'best tournament ever', NULL, 'EUW'),
(5, 'monTournois', 1, 'moi', 0, 1, 55, '', 0, 0, 'montext', NULL, 'EUW'),
(6, 'myTournament', 1, 'technet', 0, 0, 20, '', 0, 0, 'the BEst', NULL, 'NA'),
(7, 'myTournament', 1, 'technet', 0, 0, 20, '', 0, 0, 'the BEst', NULL, 'NA'),
(8, 'fight2win', 1, 'technet', 0, 0, 20, '', 0, 0, '', NULL, ''),
(9, 'fight2win', 1, 'technet', 0, 0, 20, '', 1483029447000, 1482251847000, '', NULL, ''),
(10, 'fight2win', 1, 'technet', 0, 0, 20, '', 1483029447000, 1482251847000, '', NULL, ''),
(11, 'fight2win', 1, 'technet', 0, 0, 20, '', 1483029447000, 1482251847000, '', NULL, 'KR');

-- --------------------------------------------------------

--
-- Table structure for table `tournament_to_team`
--

CREATE TABLE IF NOT EXISTS `tournament_to_team` (
  `ID` int(10) unsigned NOT NULL,
  `id_tournament` int(11) unsigned NOT NULL,
  `id_team` mediumint(8) unsigned NOT NULL,
  KEY `id_tournament` (`id_tournament`),
  KEY `id_team` (`id_team`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tournament_to_user`
--

CREATE TABLE IF NOT EXISTS `tournament_to_user` (
  `ID` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `id_tournament` int(10) unsigned NOT NULL,
  `id_user` int(10) unsigned NOT NULL,
  `post_pref1` enum('top','jungle','mid','adc','support') COLLATE utf8_unicode_ci DEFAULT NULL,
  `post_pref2` enum('top','jungle','mid','adc','support') COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `registered_fk_tournament` (`id_tournament`),
  KEY `registered_fk_user` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `user_t`
--

CREATE TABLE IF NOT EXISTS `user_t` (
  `id_user` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(65) COLLATE utf8_unicode_ci NOT NULL COMMENT 'pseudo in game',
  `password` varchar(128) CHARACTER SET utf8 NOT NULL,
  `email` varchar(65) CHARACTER SET utf8 NOT NULL COMMENT 'for password recovery',
  `server` enum('NA','EUNE','EUW','LAN','LAS','BR','TR','RU','OCE') CHARACTER SET utf8 NOT NULL,
  `mat_gen` varchar(65) CHARACTER SET utf8 DEFAULT NULL COMMENT 'matrix of the skill of the player',
  `note` varchar(535) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1= player,0=admin, banned, restricted',
  `privacy_lvl` tinyint(4) DEFAULT NULL,
  `summonerId` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=70 ;

--
-- Dumping data for table `user_t`
--

INSERT INTO `user_t` (`id_user`, `pseudo`, `password`, `email`, `server`, `mat_gen`, `note`, `status`, `privacy_lvl`, `summonerId`) VALUES
(64, 'technet1', '3ebccc40587519f80b74fa11bc1f6858ac5446f55b8067ba2882d6a05fdca5cf', 'noreply@nonsulting.fr', 'EUW', NULL, NULL, 1, NULL, 72170695),
(69, 'technet', 'bf222a8761846f46ca5e0586019422beab3e468b4edbfd733aa815de0deda371', '', 'EUW', NULL, NULL, 1, NULL, 63657737);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `match_t`
--
ALTER TABLE `match_t`
  ADD CONSTRAINT `looser_fk` FOREIGN KEY (`looser_to_match`) REFERENCES `match_t` (`id_match`) ON DELETE CASCADE,
  ADD CONSTRAINT `match_fk_tournament` FOREIGN KEY (`id_tournament`) REFERENCES `tournament_t` (`id_tournament`) ON DELETE CASCADE,
  ADD CONSTRAINT `winner_fk` FOREIGN KEY (`winner_to_match`) REFERENCES `match_t` (`id_match`) ON DELETE CASCADE;

--
-- Constraints for table `match_to_team`
--
ALTER TABLE `match_to_team`
  ADD CONSTRAINT `match_fk` FOREIGN KEY (`id_match`) REFERENCES `match_t` (`id_match`) ON DELETE CASCADE,
  ADD CONSTRAINT `team_fk` FOREIGN KEY (`id_team`) REFERENCES `team_t` (`id_team`) ON DELETE CASCADE;

--
-- Constraints for table `team_to_user`
--
ALTER TABLE `team_to_user`
  ADD CONSTRAINT `team_fk_user` FOREIGN KEY (`id_team`) REFERENCES `team_t` (`id_team`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_fk_team` FOREIGN KEY (`id_user`) REFERENCES `user_t` (`id_user`) ON DELETE CASCADE;

--
-- Constraints for table `tournament_to_team`
--
ALTER TABLE `tournament_to_team`
  ADD CONSTRAINT `team_fk_tournament` FOREIGN KEY (`id_tournament`) REFERENCES `tournament_t` (`id_tournament`) ON DELETE CASCADE,
  ADD CONSTRAINT `tournament_fk_team` FOREIGN KEY (`id_team`) REFERENCES `team_t` (`id_team`) ON DELETE CASCADE;

--
-- Constraints for table `tournament_to_user`
--
ALTER TABLE `tournament_to_user`
  ADD CONSTRAINT `registered_fk_tournament` FOREIGN KEY (`id_tournament`) REFERENCES `tournament_t` (`id_tournament`) ON DELETE CASCADE,
  ADD CONSTRAINT `registered_fk_user` FOREIGN KEY (`id_user`) REFERENCES `user_t` (`id_user`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
