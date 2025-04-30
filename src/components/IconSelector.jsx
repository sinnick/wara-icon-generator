import { useState, useEffect } from 'react';
// Importaciones ampliadas de colecciones de iconos
import * as Ai from "react-icons/ai"; // Ant Design Icons
import * as Bi from "react-icons/bi"; // BoxIcons
import * as Bs from "react-icons/bs"; // Bootstrap Icons
import * as Cg from "react-icons/cg"; // Custom Icons
import * as Di from "react-icons/di"; // Devicons
import * as Fa from "react-icons/fa"; // Font Awesome 5
import * as Fa6 from "react-icons/fa6"; // Font Awesome 6
import * as Fc from "react-icons/fc"; // Flat Color Icons
import * as Fi from "react-icons/fi"; // Feather Icons
import * as Gi from "react-icons/gi"; // Game Icons
import * as Go from "react-icons/go"; // Github Octicons
import * as Gr from "react-icons/gr"; // Grommet Icons
import * as Hi from "react-icons/hi"; // Heroicons
import * as Hi2 from "react-icons/hi2"; // Heroicons 2
import * as Im from "react-icons/im"; // IcoMoon
import * as Io from "react-icons/io"; // Ionicons 4
import * as Io5 from "react-icons/io5"; // Ionicons 5
import * as Lu from "react-icons/lu"; // Lucide Icons
import * as Md from "react-icons/md"; // Material Design Icons
import * as Pi from "react-icons/pi"; // Phosphor Icons
import * as Ri from "react-icons/ri"; // Remix Icons
import * as Rx from "react-icons/rx"; // Radix Icons
import * as Si from "react-icons/si"; // Simple Icons (marcas)
import * as Sl from "react-icons/sl"; // Simple Line Icons
import * as Tb from "react-icons/tb"; // Tabler Icons
import * as Ti from "react-icons/ti"; // Typicons
import * as Tfi from "react-icons/tfi"; // Themify Icons
import * as Vsc from "react-icons/vsc"; // VS Code Icons
import * as Wi from "react-icons/wi"; // Weather Icons
import './IconSelector.css';

// Categorías de iconos organizadas para facilitar la navegación
const iconCategories = [
	{
		name: "Esenciales",
		icons: {
			// Iconos básicos y esenciales
			check: Md.MdCheck,
			checkCircle: Md.MdCheckCircle,
			cross: Md.MdClose,
			plus: Md.MdAdd,
			plusCircle: Io5.IoAddCircle,
			minus: Md.MdRemove,
			minusCircle: Fa.FaMinusCircle,
			menu: Md.MdMenu,
			menuAlt: Bs.BsList,
			menuBurger: Fi.FiMenu,
			search: Md.MdSearch,
			searchAlt: Bs.BsSearch,
			magnifyingGlass: Fa6.FaMagnifyingGlass,
			settings: Md.MdSettings,
			settingsAlt: Bs.BsGear,
			cog: Fi.FiSettings,
			home: Md.MdHome,
			homeAlt: Bs.BsHouse,
			homeModern: Hi2.HiHomeModern,
			user: Md.MdPerson,
			userAlt: Bs.BsPerson,
			userCircle: Fa.FaUserCircle,
			users: Fa.FaUsers,
			edit: Md.MdEdit,
			editAlt: Bs.BsPencil,
			pencilSquare: Hi2.HiPencilSquare,
			delete: Md.MdDelete,
			trash: Bs.BsTrash,
			trashAlt: Fi.FiTrash2,
			save: Md.MdSave,
			saveAlt: Bs.BsSave,
			floppyDisk: Fa6.FaFloppyDisk,
			download: Md.MdFileDownload,
			downloadAlt: Bs.BsDownload,
			upload: Md.MdFileUpload,
			uploadAlt: Bs.BsUpload,
			share: Md.MdShare,
			shareAlt: Bs.BsShare,
			filter: Md.MdFilterList,
			filterAlt: Bs.BsFilter,
			sort: Md.MdSort,
			sortAlt: Bs.BsArrowDownUp,
			copy: Md.MdContentCopy,
			copyAlt: Bs.BsClipboard,
			clipboard: Fa6.FaClipboard,
			exit: Md.MdExitToApp,
			exitAlt: Bs.BsBoxArrowRight,
			link: Md.MdLink,
			linkAlt: Bs.BsLink,
			paperclip: Fa6.FaPaperclip,
		}
	},
	{
		name: "Estado y Alertas",
		icons: {
			info: Md.MdInfo,
			infoCircle: Bs.BsInfoCircle,
			infoSquare: Bs.BsInfoSquare,
			warning: Md.MdWarning,
			warningTriangle: Bs.BsExclamationTriangle,
			warningCircle: Bs.BsExclamationCircle,
			error: Md.MdError,
			errorOctagon: Bs.BsExclamationOctagon,
			success: Md.MdCheckCircle,
			successCircle: Bs.BsCheckCircle,
			successCheck: Bs.BsCheck2Circle,
			help: Md.MdHelpOutline,
			helpCircle: Bs.BsQuestionCircle,
			question: Fa6.FaQuestion,
			star: Md.MdStar,
			starEmpty: Md.MdStarOutline,
			starHalf: Md.MdStarHalf,
			favorite: Md.MdFavorite,
			favoriteOutline: Md.MdFavoriteBorder,
			like: Md.MdThumbUp,
			dislike: Md.MdThumbDown,
			notification: Md.MdNotifications,
			notificationActive: Md.MdNotificationsActive,
			notificationOff: Md.MdNotificationsOff,
			bell: Bs.BsBell,
			bellFill: Bs.BsBellFill,
			loading: Md.MdLoop,
			loadingCircle: Bs.BsArrowClockwise,
			progress: Md.MdDonutLarge,
			check: Bs.BsCheck2,
			checkAll: Bs.BsCheck2All,
			checkLarge: Bs.BsCheckLg,
			close: Bs.BsX,
			closeLarge: Bs.BsXLg,
			stop: Md.MdStop,
			stopCircle: Bs.BsStopCircle,
			ban: Bs.BsSlash,
			lock: Md.MdLock,
			lockOpen: Md.MdLockOpen,
			shield: Bs.BsShield,
			shieldCheck: Bs.BsShieldCheck,
			verified: Md.MdVerified,
			visibility: Md.MdVisibility,
			visibilityOff: Md.MdVisibilityOff,
			eye: Bs.BsEye,
			eyeSlash: Bs.BsEyeSlash,
		}
	},
	{
		name: "Navegación",
		icons: {
			arrowLeft: Md.MdArrowBack,
			arrowRight: Md.MdArrowForward,
			arrowUp: Md.MdArrowUpward,
			arrowDown: Md.MdArrowDownward,
			arrowLeftCircle: Bs.BsArrowLeftCircle,
			arrowRightCircle: Bs.BsArrowRightCircle,
			arrowUpCircle: Bs.BsArrowUpCircle,
			arrowDownCircle: Bs.BsArrowDownCircle,
			chevronLeft: Md.MdChevronLeft,
			chevronRight: Md.MdChevronRight,
			chevronUp: Md.MdChevronUp,
			chevronDown: Md.MdChevronDown,
			chevronDoubleLeft: Bs.BsChevronDoubleLeft,
			chevronDoubleRight: Bs.BsChevronDoubleRight,
			chevronDoubleUp: Bs.BsChevronDoubleUp,
			chevronDoubleDown: Bs.BsChevronDoubleDown,
			caretLeft: Bs.BsCaretLeft,
			caretRight: Bs.BsCaretRight,
			caretUp: Bs.BsCaretUp,
			caretDown: Bs.BsCaretDown,
			expand: Md.MdExpandMore,
			collapse: Md.MdExpandLess,
			fullscreen: Md.MdFullscreen,
			fullscreenExit: Md.MdFullscreenExit,
			refresh: Md.MdRefresh,
			reload: Bs.BsArrowRepeat,
			sync: Md.MdSync,
			undo: Md.MdUndo,
			redo: Md.MdRedo,
			move: Bs.BsArrowsMove,
			resize: Bs.BsArrowsFullscreen,
			reorder: Md.MdDragIndicator,
			menu: Md.MdMenu,
			sidebarLeft: Bs.BsLayoutSidebarInset,
			sidebarRight: Bs.BsLayoutSidebarInsetReverse,
			more: Md.MdMoreVert,
			moreHorizontal: Bs.BsThreeDots,
			moreVertical: Bs.BsThreeDotsVertical,
			list: Bs.BsList,
			grid: Bs.BsGrid,
			table: Bs.BsTable,
			pagination: Bs.BsUiRadiosGrid,
		}
	},
	{
		name: "Comunicación",
		icons: {
			email: Md.MdEmail,
			emailOutline: Md.MdOutlineEmail,
			mail: Md.MdMail,
			mailOpen: Bs.BsEnvelopeOpen,
			send: Md.MdSend,
			sendPlane: Io5.IoPaperPlane,
			sendArrow: Bs.BsSend,
			chat: Md.MdChat,
			chatBubble: Bs.BsChatLeftText,
			chatDots: Bs.BsChatDots,
			chatSquare: Bs.BsChatSquareText,
			message: Md.MdMessage,
			messageAlt: Bs.BsChat,
			comment: Md.MdComment,
			commentAlt: Bs.BsChatLeft,
			forum: Md.MdForum,
			feedback: Md.MdFeedback,
			phone: Md.MdPhone,
			phoneAlt: Bs.BsTelephone,
			phoneFlip: Bs.BsTelephoneInbound,
			call: Md.MdCall,
			callEnd: Md.MdCallEnd,
			videocam: Md.MdVideocam,
			videoCamera: Bs.BsCameraVideo,
			mic: Md.MdMic,
			micAlt: Bs.BsMic,
			micOff: Md.MdMicOff,
			micOffAlt: Bs.BsMicMute,
			broadcast: Bs.BsBroadcast,
			megaphone: Bs.BsMegaphone,
			share: Md.MdShare,
			shareAlt: Bs.BsShare,
			reply: Md.MdReply,
			replyAll: Md.MdReplyAll,
			forward: Md.MdForward,
		}
	},
	{
		name: "Multimedia",
		icons: {
			play: Md.MdPlayArrow,
			playCircle: Bs.BsPlayCircle,
			playFill: Bs.BsPlayFill,
			pause: Md.MdPause,
			pauseCircle: Bs.BsPauseCircle,
			pauseFill: Bs.BsPauseFill,
			stop: Md.MdStop,
			stopCircle: Bs.BsStopCircle,
			stopFill: Bs.BsStopFill,
			skipNext: Md.MdSkipNext,
			skipPrevious: Md.MdSkipPrevious,
			forward10: Md.MdForward10,
			forward30: Md.MdForward30,
			replay: Md.MdReplay,
			replay10: Md.MdReplay10,
			replay30: Md.MdReplay30,
			shuffle: Md.MdShuffle,
			repeat: Md.MdRepeat,
			repeatOne: Md.MdRepeatOne,
			volumeUp: Md.MdVolumeUp,
			volumeDown: Md.MdVolumeDown,
			volumeMute: Md.MdVolumeMute,
			volumeOff: Md.MdVolumeOff,
			image: Md.MdImage,
			imageAlt: Bs.BsImage,
			photo: Md.MdPhoto,
			photoAlt: Bs.BsCardImage,
			photoLibrary: Md.MdPhotoLibrary,
			photoAlbum: Bs.BsImages,
			camera: Md.MdCamera,
			cameraAlt: Bs.BsCamera,
			movie: Md.MdMovie,
			movieAlt: Bs.BsFilm,
			video: Md.MdVideocam,
			videoFile: Bs.BsFileEarmarkPlay,
			music: Md.MdMusicNote,
			musicAlt: Bs.BsMusicNote,
			audioFile: Bs.BsFileEarmarkMusic,
			playlist: Md.MdQueueMusic,
			queue: Md.MdQueue,
			headphones: Bs.BsHeadphones,
			speaker: Md.MdSpeaker,
			mic: Md.MdMic,
		}
	},
	{
		name: "Archivos y Documentos",
		icons: {
			file: Bi.BiFile,
			fileAdd: Bs.BsFileEarmarkPlus,
			fileCheck: Bs.BsFileEarmarkCheck,
			fileCode: Bs.BsFileEarmarkCode,
			fileBinary: Bs.BsFileEarmarkBinary,
			fileText: Bi.BiFileBlank,
			fileTextAlt: Bs.BsFileEarmarkText,
			filePdf: Bi.BiFilePdf,
			fileImage: Bs.BsFileEarmarkImage,
			fileVideo: Bs.BsFileEarmarkPlay,
			fileAudio: Bs.BsFileEarmarkMusic,
			fileSpreadsheet: Bi.BiFileSpreadsheet,
			fileExcel: Bs.BsFileEarmarkExcel,
			fileWord: Bs.BsFileEarmarkWord,
			filePowerpoint: Bs.BsFileEarmarkPpt,
			fileZip: Bs.BsFileEarmarkZip,
			document: Md.MdDescription,
			documentScanner: Md.MdDocumentScanner,
			documentAlt: Bs.BsFileEarmark,
			folder: Bi.BiFolder,
			folderOpen: Bi.BiFolderOpen,
			folderAdd: Bs.BsFolderPlus,
			folderCheck: Bs.BsFolderCheck,
			cloud: Md.MdCloud,
			cloudUpload: Md.MdCloudUpload,
			cloudDownload: Md.MdCloudDownload,
			cloudSync: Md.MdCloudSync,
			cloudOff: Md.MdCloudOff,
			attachment: Md.MdAttachFile,
			attachmentAlt: Bs.BsPaperclip,
			link: Md.MdLink,
			linkAlt: Bs.BsLink,
			unlink: Md.MdLinkOff,
			copy: Md.MdContentCopy,
			paste: Md.MdContentPaste,
			cut: Md.MdContentCut,
			scissors: Bs.BsScissors,
			archive: Bi.BiArchive,
			zip: Bi.BiArchive,
			inbox: Md.MdInbox,
			outbox: Md.MdOutbox,
			download: Bs.BsDownload,
			upload: Bs.BsUpload,
			save: Bs.BsSave,
			print: Bs.BsPrinter,
			trash: Bs.BsTrash,
		}
	},
	{
		name: "Dispositivos y Hardware",
		icons: {
			laptop: Md.MdLaptop,
			laptopAlt: Bs.BsLaptop,
			desktop: Md.MdDesktopWindows,
			desktopAlt: Bs.BsDisplay,
			computer: Bs.BsPc,
			monitor: Bs.BsDisplayport,
			pc: Bs.BsPcDisplay,
			smartphone: Md.MdSmartphone,
			smartphoneAlt: Bs.BsPhone,
			mobilePhone: Md.MdPhoneAndroid,
			iphone: Bs.BsApple,
			tablet: Md.MdTablet,
			tabletAlt: Bs.BsTablet,
			watch: Md.MdWatch,
			watchAlt: Bs.BsSmartwatch,
			keyboard: Md.MdKeyboard,
			keyboardAlt: Bs.BsKeyboard,
			mouse: Bi.BiMouse,
			mouseAlt: Bs.BsMouse,
			printer: Bi.BiPrinter,
			printerAlt: Bs.BsPrinter,
			scanner: Md.MdScanner,
			projector: Bs.BsCameraReels,
			camera: Bs.BsCamera,
			cameraAlt: Md.MdCamera,
			webcam: Bs.BsCameraVideo,
			headphones: Bs.BsHeadphones,
			headset: Bs.BsHeadset,
			speaker: Md.MdSpeaker,
			speakerAlt: Bs.BsSpeaker,
			microphone: Bs.BsMic,
			usbDrive: Md.MdUsbOff,
			memory: Bs.BsMemory,
			cpu: Bs.BsCpu,
			chip: Bs.BsCpuFill,
			hardDrive: Bs.BsHdd,
			ssd: Bs.BsDeviceHdd,
			wifi: Md.MdWifi,
			wifiAlt: Bs.BsWifi,
			bluetooth: Md.MdBluetooth,
			bluetoothAlt: Bs.BsBluetooth,
			battery: Md.MdBatteryFull,
			batteryAlt: Bs.BsBattery,
			batteryCharging: Md.MdBatteryCharging,
			batteryAlert: Md.MdBatteryAlert,
			powerOff: Bs.BsPower,
			sdCard: Md.MdSdCard,
			sdCardAlt: Bs.BsSdCard,
			simCard: Bs.BsSimFill,
			router: Bs.BsRouter,
			usb: Md.MdUsb,
			gamepad: Bs.BsController,
		}
	},
	{
		name: "Compras y Comercio",
		icons: {
			cart: Md.MdShoppingCart,
			cartAlt: Bs.BsCart,
			bag: Md.MdShoppingBag,
			bagAlt: Bs.BsBag,
			basket: Bs.BsBasket,
			store: Md.MdStore,
			storeAlt: Bs.BsShop,
			storefront: Md.MdStorefront,
			shop: Bs.BsShop,
			creditCardAlt: Bs.BsCreditCard,
			wallet: Md.MdAccountBalanceWallet,
			walletAlt: Bs.BsWallet,
			cash: Bs.BsCash,
			cashCoin: Bs.BsCashCoin,
			coin: Bs.BsCoin,
			bank: Md.MdAccountBalance,
			gift: Bi.BiGift,
			giftAlt: Bs.BsGift,
			tag: Md.MdLocalOffer,
			tagAlt: Bs.BsTag,
			tags: Bs.BsTags,
			discount: Md.MdLocalOffer,
			percentage: Fa.FaPercentage,
			sale: Bs.BsTagsFill,
			label: Bs.BsBookmark,
			barcode: Bi.BiBarcode,
			barcodeAlt: Bs.BsUpc,
			qrCode: Md.MdQrCode,
			qrCodeAlt: Bs.BsQrCode,
			receipt: Md.MdReceipt,
			receiptAlt: Bs.BsReceipt,
			invoice: Bs.BsFileEarmarkRuled,
			money: Bi.BiMoney,
			moneyAlt: Bs.BsCashStack,
			currency: Bs.BsCurrencyExchange,
			dollar: Bs.BsCurrencyDollar,
			euro: Bs.BsCurrencyEuro,
			pound: Bs.BsCurrencyPound,
			bitcoin: Bs.BsCurrencyBitcoin,
			creditCard: Bs.BsCreditCard,
			coupon: Bi.BiCoupon,
			couponAlt: Bs.BsTicket,
			calculator: Bs.BsCalculator,
			cart4: Bs.BsCart4,
			cartCheck: Bs.BsCartCheck,
			cartPlus: Bs.BsCartPlus,
			cartX: Bs.BsCartX,
		}
	},
	{
		name: "Transporte",
		icons: {
			car: Md.MdDirectionsCar,
			carAlt: Bs.BsCar,
			taxi: Md.MdLocalTaxi,
			bus: Md.MdDirectionsBus,
			busAlt: Bs.BsBusFront,
			truck: Bs.BsTruck,
			truckFlatbed: Bs.BsTruckFlatbed,
			van: Bs.BsTruck,
			train: Md.MdTrain,
			trainAlt: Bs.BsTrain,
			subway: Md.MdSubway,
			tram: Md.MdTram,
			flight: Md.MdFlight,
			airplane: Bs.BsAirplane,
			airplaneFill: Bs.BsAirplaneFill,
			rocket: Fa.FaRocket,
			helicopter: Fa.FaHelicopter,
			ship: Bs.BsShip,
			boat: Bi.BiWater,
			anchor: Fa.FaAnchor,
			bicycle: Md.MdDirectionsBike,
			bike: Bs.BsBicycle,
			scooter: Fa.FaMotorcycle,
			motorcycle: Bs.BsScooter,
			walk: Md.MdDirectionsWalk,
			run: Md.MdDirectionsRun,
			personWalking: Fa.FaPersonWalking,
			map: Md.MdMap,
			mapAlt: Bs.BsMap,
			compass: Bi.BiCompass,
			compassAlt: Bs.BsCompass,
			directions: Md.MdDirections,
			locationOn: Md.MdLocationOn,
			locationPin: Bs.BsGeoAlt,
			navigation: Md.MdNavigation,
			navigationAlt: Bs.BsGeo,
			route: Bs.BsSignpost,
			trafficLight: Fa.FaTrafficLight,
			parking: Md.MdLocalParking,
			parkingCircle: Fa.FaParking,
			gasStation: Bs.BsFuelPump,
			chargingStation: Bs.BsPlugFill,
			roadSign: Fa.FaRoad,
		}
	},
	{
		name: "Tiempo y Clima",
		icons: {
			calendar: Md.MdCalendarToday,
			calendarAlt: Bs.BsCalendar,
			calendarWeek: Bs.BsCalendarWeek,
			calendarMonth: Bs.BsCalendarMonth,
			calendarEvent: Bs.BsCalendarEvent,
			calendarCheck: Bs.BsCalendarCheck,
			calendarPlus: Bs.BsCalendarPlus,
			calendarX: Bs.BsCalendarX,
			event: Md.MdEvent,
			eventNote: Md.MdEventNote,
			today: Md.MdToday,
			schedule: Md.MdSchedule,
			clock: Bs.BsClock,
			clockFill: Bs.BsClockFill,
			clockHistory: Bs.BsClockHistory,
			watch: Md.MdWatch,
			watchLater: Md.MdWatchLater,
			hourglass: Bs.BsHourglass,
			hourglassSplit: Bs.BsHourglassSplit,
			timer: Md.MdTimer,
			timerOff: Md.MdTimerOff,
			alarm: Md.MdAlarm,
			alarmOn: Md.MdAlarmOn,
			alarmOff: Md.MdAlarmOff,
			sun: Wi.WiDaySunny,
			sunAlt: Bs.BsSun,
			sunFill: Bs.BsSunFill,
			moon: Wi.WiNightClear,
			moonAlt: Bs.BsMoon,
			moonFill: Bs.BsMoonFill,
			cloud: Wi.WiCloud,
			cloudAlt: Bs.BsCloud,
			cloudFill: Bs.BsCloudFill,
			cloudSun: Wi.WiDayCloudy,
			cloudSunAlt: Bs.BsCloudSun,
			cloudMoon: Wi.WiNightAltPartlyCloudy,
			cloudMoonAlt: Bs.BsCloudMoon,
			cloudRain: Wi.WiRain,
			cloudRainAlt: Bs.BsCloudRain,
			cloudDrizzle: Wi.WiSprinkle,
			rain: Wi.WiRain,
			umbrella: Bs.BsUmbrella,
			cloudSnow: Wi.WiSnow,
			snow: Wi.WiSnow,
			snowflake: Bs.BsSnow,
			storm: Wi.WiThunderstorm,
			lightning: Bs.BsLightning,
			tornado: Wi.WiTornado,
			hurricane: Wi.WiHurricane,
			wind: Wi.WiWindy,
			windAlt: Bs.BsWind,
			temperature: Wi.WiThermometer,
			temperatureHigh: Bs.BsThermometerHigh,
			temperatureLow: Bs.BsThermometerLow,
			temperatureHalf: Bs.BsThermometerHalf,
			humidity: Wi.WiHumidity,
			fog: Wi.WiFog,
			fogAlt: Bs.BsCloudFog,
			sunrise: Wi.WiSunrise,
			sunset: Wi.WiSunset,
		}
	},
	{
		name: "Redes Sociales",
		icons: {
			facebook: Fa.FaFacebook,
			facebookSquare: Fa.FaFacebookSquare,
			twitter: Fa.FaTwitter,
			twitterSquare: Fa.FaTwitterSquare,
			instagram: Fa.FaInstagram,
			youtube: Fa.FaYoutube,
			youtubeSquare: Fa.FaYoutubeSquare,
			linkedin: Fa.FaLinkedin,
			linkedinSquare: Fa.FaLinkedinIn,
			github: Fa.FaGithub,
			githubSquare: Fa.FaGithubSquare,
			gitlab: Fa.FaGitlab,
			bitbucket: Fa.FaBitbucket,
			pinterest: Fa.FaPinterest,
			pinterestSquare: Fa.FaPinterestSquare,
			reddit: Fa.FaReddit,
			redditSquare: Fa.FaRedditSquare,
			tumblr: Fa.FaTumblr,
			tumblrSquare: Fa.FaTumblrSquare,
			twitch: Fa.FaTwitch,
			vimeo: Fa.FaVimeo,
			vimeoSquare: Fa.FaVimeoV,
			behance: Fa.FaBehance,
			behanceSquare: Fa.FaBehanceSquare,
			dribbble: Fa.FaDribbble,
			whatsapp: Fa.FaWhatsapp,
			whatsappSquare: Fa.FaWhatsappSquare,
			telegram: Fa.FaTelegram,
			discord: Fa.FaDiscord,
			slack: Fa.FaSlack,
			snapchat: Fa.FaSnapchat,
			snapchatSquare: Fa.FaSnapchatSquare,
			tikTok: Fa.FaTiktok,
			medium: Fa.FaMedium,
			googlePlus: Fa.FaGooglePlus,
			googlePlusSquare: Fa.FaGooglePlusG,
			android: Fa.FaAndroid,
			apple: Fa.FaApple,
			windows: Fa.FaWindows,
			amazon: Fa.FaAmazon,
			spotify: Fa.FaSpotify,
			soundcloud: Fa.FaSoundcloud,
			lastfm: Fa.FaLastfm,
			jira: Fa.FaJira,
			trello: Fa.FaTrello,
			wordpress: Fa.FaWordpress,
			drupal: Fa.FaDrupal,
			skype: Fa.FaSkype,
			dropbox: Fa.FaDropbox,
			airbnb: Fa.FaAirbnb,
			uber: Fa.FaUber,
			lyft: Fa.FaLyft,
			paypal: Fa.FaPaypal,
			stripe: Fa.FaStripe,
			visa: Fa.FaViacoin,
			mastercard: Fa.FaCcMastercard,
			amex: Fa.FaCcAmex,
		}
	},
	{
		name: "Decorativos",
		icons: {
			heart: Fa.FaHeart,
			heartOutline: Fa.FaRegHeart,
			heartPulse: Fa.FaHeartbeat,
			star: Fa.FaStar,
			starOutline: Fa.FaRegStar,
			starHalf: Fa.FaStarHalfAlt,
			crown: Gi.GiCrown,
			crownAlt: Fa.FaCrown,
			diamond: Gi.GiDiamonds,
			diamondAlt: Fa.FaGem,
			flower: Fa.FaSeedling,
			leaf: Fa.FaLeaf,
			leafAlt: Gi.GiOakLeaf,
			paw: Fa.FaPaw,
			pawAlt: Gi.GiDogPaw,
			flame: Gi.GiFlame,
			flameAlt: Fa.FaFire,
			lightning: Gi.GiLightningBolt,
			lightningAlt: Bs.BsLightning,
			shield: Fa.FaShieldAlt,
			shieldCross: Gi.GiCrossShield,
			swords: Gi.GiCrossedSwords,
			anchor: Fa.FaAnchor,
			puzzle: Fa.FaPuzzlePiece,
			magic: Fa.FaMagic,
			palette: Fa.FaPalette,
			paint: Fa.FaPaintBrush,
			coffee: Fa.FaCoffee,
			coffeeAlt: Bs.BsCupHot,
			beer: Fa.FaBeer,
			beerAlt: Gi.GiBeerStein,
			wine: Fa.FaWineGlass,
			cocktail: Fa.FaGlassMartini,
			pizza: Fa.FaPizzaSlice,
			pizzaAlt: Gi.GiFullPizza,
			hamburger: Fa.FaHamburger,
			frenchFries: Gi.GiFrenchFries,
			iceCream: Fa.FaIceCream,
			cake: Fa.FaBirthdayCake,
			cookie: Gi.GiCookies,
			candy: Gi.GiWrappedSweet,
			lollipop: Gi.GiLollipop,
			dog: Fa.FaDog,
			cat: Fa.FaCat,
			dragon: Gi.GiDragonHead,
			horse: Fa.FaHorse,
			spider: Fa.FaSpider,
			butterfly: Gi.GiButterfly,
			guitar: Fa.FaGuitar,
			guitarAlt: Gi.GiGuitar,
			piano: Gi.GiGrandPiano,
			drum: Fa.FaDrum,
			trumpet: Gi.GiTrumpet,
			sport: Fa.FaBasketballBall,
			football: Fa.FaFootballBall,
			basketball: Fa.FaBasketballBall,
			baseball: Fa.FaBaseballBall,
			rocket: Fa.FaRocket,
			alien: Fa.FaUserAstronaut,
			robot: Fa.FaRobot,
			gamepad: Fa.FaGamepad,
		}
	},
	{
		name: "Objetos Cotidianos",
		icons: {
			book: Bs.BsBook,
			bookFill: Bs.BsBookFill,
			bookHalf: Bs.BsBookHalf,
			books: Fa.FaBook,
			newspaper: Fa.FaNewspaper,
			glasses: Fa.FaGlasses,
			sunglasses: Fa.FaGlasses,
			umbrella: Fa.FaUmbrella,
			umbrellaAlt: Bs.BsUmbrella,
			briefcase: Fa.FaBriefcase,
			briefcaseAlt: Bs.BsBriefcase,
			backpack: Fa.FaShoppingBag,
			suitcase: Fa.FaSuitcase,
			suitcaseRolling: Fa.FaSuitcaseRolling,
			box: Fa.FaBox,
			boxOpen: Fa.FaBoxOpen,
			boxes: Fa.FaBoxes,
			lightbulb: Fa.FaLightbulb,
			lightbulbFill: Bs.BsLightbulb,
			lamp: Gi.GiDesk,
			tv: Bs.BsTv,
			display: Fa.FaDesktop,
			phone: Fa.FaPhone,
			phoneAlt: Bs.BsTelephone,
			mobile: Fa.FaMobile,
			envelope: Fa.FaEnvelope,
			camera: Fa.FaCamera,
			video: Fa.FaVideo,
			headphones: Fa.FaHeadphones,
			microphone: Fa.FaMicrophone,
			key: Fa.FaKey,
			keyAlt: Bs.BsKey,
			wallet: Fa.FaWallet,
			creditCard: Fa.FaCreditCard,
			moneyBill: Fa.FaMoneyBill,
			coin: Fa.FaCoins,
			tag: Fa.FaTag,
			tags: Fa.FaTags,
			gift: Fa.FaGift,
			bell: Fa.FaBell,
			trophy: Fa.FaTrophy,
			award: Fa.FaAward,
			medal: Fa.FaMedal,
			ticket: Fa.FaTicketAlt,
			certificate: Fa.FaCertificate,
			clipboard: Fa.FaClipboard,
			pen: Fa.FaPen,
			pencil: Fa.FaPencilAlt,
			marker: Fa.FaMarker,
			paintBrush: Fa.FaPaintBrush,
			eraser: Fa.FaEraser,
			scissors: Fa.FaScissors,
			ruler: Fa.FaRuler,
			compass: Fa.FaCompass,
			stapler: Fa.FaPaperclip,
			paperclip: Fa.FaPaperclip,
			calculator: Fa.FaCalculator,
			hammer: Fa.FaHammer,
			screwdriver: Fa.FaScrewdriver,
			wrench: Fa.FaWrench,
			tools: Fa.FaTools,
			brush: Fa.FaBroom,
			spray: Fa.FaSprayCan,
			soap: Fa.FaSoap,
			tshirt: Fa.FaTshirt,
			socks: Fa.FaSocks,
			shoePrint: Fa.FaShoePrints,
			babyCarriage: Fa.FaBabyCarriage,
			bone: Fa.FaBone,
			tooth: Fa.FaTooth,
			pills: Fa.FaTablets,
			bandage: Fa.FaBandAid,
			bed: Fa.FaBed,
			bathtub: Fa.FaBath,
			shower: Fa.FaShower,
			toilet: Fa.FaToilet,
			couch: Fa.FaCouch,
			chair: Fa.FaChair,
			table: Fa.FaTable,
			sink: Fa.FaSink,
			dumbbell: Fa.FaDumbbell,
			bicycle: Fa.FaBiking,
			weight: Fa.FaWeight,
			basketball: Fa.FaBasketballBall,
			football: Fa.FaFootballBall,
			baseball: Fa.FaBaseballBall,
			tennisball: Gi.GiTennisBall,
			volleyball: Fa.FaVolleyballBall,
			golfball: Fa.FaGolfBall,
			lemon: Fa.FaLemon,
			apple: Fa.FaAppleAlt,
			carrot: Fa.FaCarrot,
			pepper: Gi.GiChiliPepper,
			icecream: Fa.FaIceCream,
			pizza: Fa.FaPizzaSlice,
			coffee: Fa.FaCoffee,
			beer: Fa.FaBeer,
			cocktail: Fa.FaGlassMartini,
			wine: Fa.FaWineGlass,
			utensils: Fa.FaUtensils,
			fire: Fa.FaFire,
			burn: Fa.FaFireAlt,
		}
	},
	{
		name: "Formas Geométricas",
		icons: {
			squareBlank: Bs.BsSquare,
			squareFill: Bs.BsSquareFill,
			rectangleBlank: Bs.BsApp,
			rectangleFill: Bs.BsAppFill,
			circle: Bs.BsCircle,
			circleFill: Bs.BsCircleFill,
			triangleBlank: Bs.BsTriangle,
			triangleFill: Bs.BsTriangleFill,
			diamond: Bs.BsDiamond,
			diamondFill: Bs.BsDiamondFill,
			pentagon: Gi.GiPentacle,
			pentagonFill: Gi.GiPentagramRose,
			hexagon: Bs.BsHexagon,
			hexagonFill: Bs.BsHexagonFill,
			octagon: Bs.BsOctagon,
			octagonFill: Bs.BsOctagonFill,
			star: Bs.BsStar,
			starFill: Bs.BsStarFill,
			heart: Bs.BsHeart,
			heartFill: Bs.BsHeartFill,
			shield: Bs.BsShield,
			shieldFill: Bs.BsShieldFill,
			cone: Gi.GiIceCreamCone,
			cube: Bs.BsBox,
			cubeFill: Bs.BsBoxFill,
			cylinder: Gi.GiCylinderHat,
			sphere: Fa.FaBaseballBall,
			drop: Bs.BsDroplet,
			dropFill: Bs.BsDropletFill,
			bolt: Bs.BsLightning,
			boltFill: Bs.BsLightningFill,
			xMark: Bs.BsX,
			xMarkSquare: Bs.BsXSquare,
			xMarkSquareFill: Bs.BsXSquareFill,
			plus: Bs.BsPlus,
			plusSquare: Bs.BsPlusSquare,
			plusSquareFill: Bs.BsPlusSquareFill,
			dash: Bs.BsDash,
			dashSquare: Bs.BsDashSquare,
			dashSquareFill: Bs.BsDashSquareFill,
		}
	},
	{
		name: "Ciencia y Tecnología",
		icons: {
			atom: Bs.BsActivity,
			brain: Fa.FaBrain,
			dna: Fa.FaDna,
			microscope: Fa.FaMicroscope,
			telescope: Gi.GiTelescopicSight,
			satelliteDish: Fa.FaSatelliteDish,
			satellite: Fa.FaSatellite,
			globe: Fa.FaGlobe,
			earth: Fa.FaGlobeAmericas,
			earthAsia: Fa.FaGlobeAsia,
			earthEurope: Fa.FaGlobeEurope,
			rocket: Fa.FaRocket,
			rocketAlt: Bs.BsRocket,
			ufo: Gi.GiUfo,
			meteor: Gi.GiMeteor,
			spaceShuttle: Fa.FaSpaceShuttle,
			alien: Gi.GiAlienStare,
			robot: Fa.FaRobot,
			androidsymbol: Fa.FaAndroid,
			apple: Fa.FaApple,
			windows: Fa.FaWindows,
			linux: Fa.FaLinux,
			ubuntu: Fa.FaUbuntu,
			react: Fa.FaReact,
			angular: Fa.FaAngular,
			vuejs: Fa.FaVuejs,
			js: Fa.FaJs,
			php: Fa.FaPhp,
			python: Fa.FaPython,
			java: Fa.FaJava,
			code: Fa.FaCode,
			terminal: Fa.FaTerminal,
			database: Fa.FaDatabase,
			server: Fa.FaServer,
			cloud: Fa.FaCloud,
			network: Fa.FaNetworkWired,
			wifi: Fa.FaWifi,
			bluetooth: Fa.FaBluetooth,
			barcode: Fa.FaBarcode,
			qrcode: Fa.FaQrcode,
			cpu: Bs.BsCpu,
			memory: Bs.BsMemory,
			gpu: Fa.FaMicrochip,
			keyboard: Fa.FaKeyboard,
			mouse: Fa.FaMouse,
			usb: Fa.FaUsb,
			batteryFull: Bs.BsBatteryFull,
			batteryHalf: Bs.BsBatteryHalf,
			batteryEmpty: Bs.BsBatteryEmpty,
			powerOff: Fa.FaPowerOff,
			lightbulb: Fa.FaLightbulb,
			cogs: Fa.FaCogs,
			tools: Fa.FaTools,
		}
	},
	{
		name: "Negocios y Finanzas",
		icons: {
			briefcase: Fa.FaBriefcase,
			briefcaseAlt: Bs.BsBriefcase,
			chart: Fa.FaChartBar,
			chartAlt: Bs.BsBarChart,
			chartLine: Fa.FaChartLine,
			chartPie: Fa.FaChartPie,
			pieChart: Bs.BsPieChart,
			barChart: Bs.BsBarChart,
			lineChart: Bs.BsGraphUp,
			graph: Bs.BsGraphDown,
			analytics: Bs.BsBarChartLine,
			presentation: Fa.FaPresentations,
			megaphone: Fa.FaBullhorn,
			userTie: Fa.FaUserTie,
			users: Fa.FaUsers,
			handshake: Fa.FaHandshake,
			moneyBill: Fa.FaMoneyBill,
			moneyCheck: Fa.FaMoneyCheck,
			coins: Fa.FaCoins,
			coin: Bs.BsCoin,
			creditCard: Fa.FaCreditCard,
			creditCardAlt: Bs.BsCreditCard,
			wallet: Fa.FaWallet,
			walletAlt: Bs.BsWallet,
			bank: Fa.FaUniversity,
			bankAlt: Bs.BsBank,
			atm: Fa.FaUniversity,
			cash: Bs.BsCash,
			calculator: Fa.FaCalculator,
			calculatorAlt: Bs.BsCalculator,
			percentage: Fa.FaPercentage,
			piggyBank: Fa.FaPiggyBank,
			dollarSign: Fa.FaDollarSign,
			euroSign: Fa.FaEuroSign,
			poundSign: Fa.FaPoundSign,
			yenSign: Fa.FaYenSign,
			donate: Fa.FaHandHoldingUsd,
			receipt: Fa.FaReceipt,
			invoice: Fa.FaFileInvoice,
			fileInvoice: Fa.FaFileInvoiceDollar,
			stamp: Fa.FaStamp,
			balance: Fa.FaBalanceScale,
			award: Fa.FaAward,
			trophy: Fa.FaTrophy,
			certificate: Fa.FaCertificate,
			building: Fa.FaBuilding,
			store: Fa.FaStore,
			factory: Fa.FaIndustry,
			warehouse: Fa.FaWarehouse,
			shipping: Fa.FaShippingFast,
			truck: Fa.FaTruck,
			box: Fa.FaBox,
			clipboard: Fa.FaClipboard,
			tasks: Fa.FaTasks,
			project: Fa.FaProjectDiagram,
			sitemap: Fa.FaSitemap,
			signature: Fa.FaSignature,
			pen: Fa.FaPen,
			edit: Fa.FaEdit,
			search: Fa.FaSearch,
			print: Fa.FaPrint,
			phone: Fa.FaPhone,
			fax: Fa.FaFax,
			mailbox: Fa.FaMailBulk,
			bullhorn: Fa.FaBullhorn,
			globe: Fa.FaGlobe,
		}
	},
	{
		name: "Ionicons",
		icons: {
			// Iconos de interfaz de usuario
			addCircle: Io5.IoAddCircle,
			addCircleOutline: Io5.IoAddCircleOutline,
			removeCircle: Io5.IoRemoveCircle,
			removeCircleOutline: Io5.IoRemoveCircleOutline,
			checkmarkCircle: Io5.IoCheckmarkCircle,
			checkmarkCircleOutline: Io5.IoCheckmarkCircleOutline,
			closeCircle: Io5.IoCloseCircle,
			closeCircleOutline: Io5.IoCloseCircleOutline,
			alertCircle: Io5.IoAlertCircle,
			alertCircleOutline: Io5.IoAlertCircleOutline,
			informationCircle: Io5.IoInformationCircle,
			informationCircleOutline: Io5.IoInformationCircleOutline,
			helpCircle: Io5.IoHelpCircle,
			helpCircleOutline: Io5.IoHelpCircleOutline,

			// Iconos de navegación
			arrowBack: Io5.IoArrowBack,
			arrowBackCircle: Io5.IoArrowBackCircle,
			arrowForward: Io5.IoArrowForward,
			arrowForwardCircle: Io5.IoArrowForwardCircle,
			arrowUp: Io5.IoArrowUp,
			arrowUpCircle: Io5.IoArrowUpCircle,
			arrowDown: Io5.IoArrowDown,
			arrowDownCircle: Io5.IoArrowDownCircle,
			chevronBack: Io5.IoChevronBack,
			chevronForward: Io5.IoChevronForward,
			chevronUp: Io5.IoChevronUp,
			chevronDown: Io5.IoChevronDown,

			// Iconos de medios
			play: Io5.IoPlay,
			playCircle: Io5.IoPlayCircle,
			playOutline: Io5.IoPlayOutline,
			pause: Io5.IoPause,
			pauseCircle: Io5.IoPauseCircle,
			pauseOutline: Io5.IoPauseOutline,
			stop: Io5.IoStop,
			stopCircle: Io5.IoStopCircle,
			stopOutline: Io5.IoStopOutline,
			volume: Io5.IoVolumeMedium,
			volumeHigh: Io5.IoVolumeHigh,
			volumeLow: Io5.IoVolumeLow,
			volumeMute: Io5.IoVolumeMute,

			// Iconos de comunicación
			mail: Io5.IoMail,
			mailOutline: Io5.IoMailOutline,
			mailOpen: Io5.IoMailOpen,
			mailOpenOutline: Io5.IoMailOpenOutline,
			chatbox: Io5.IoChatbox,
			chatboxOutline: Io5.IoChatboxOutline,
			chatbubble: Io5.IoChatbubble,
			chatbubbleOutline: Io5.IoChatbubbleOutline,
			send: Io5.IoSend,
			sendOutline: Io5.IoSendOutline,
			paperPlane: Io5.IoPaperPlane,
			paperPlaneOutline: Io5.IoPaperPlaneOutline,
			call: Io5.IoCall,
			callOutline: Io5.IoCallOutline,
			videocam: Io5.IoVideocam,
			videocamOutline: Io5.IoVideocamOutline,

			// Iconos de dispositivos
			phonePortrait: Io5.IoPhonePortrait,
			phonePortraitOutline: Io5.IoPhonePortraitOutline,
			laptop: Io5.IoLaptop,
			laptopOutline: Io5.IoLaptopOutline,
			desktop: Io5.IoDesktop,
			desktopOutline: Io5.IoDesktopOutline,
			tv: Io5.IoTv,
			tvOutline: Io5.IoTvOutline,
			tablet: Io5.IoTablet,
			tabletOutline: Io5.IoTabletOutline,
			watch: Io5.IoWatch,
			watchOutline: Io5.IoWatchOutline,

			// Iconos de foto y cámara
			camera: Io5.IoCamera,
			cameraOutline: Io5.IoCameraOutline,
			image: Io5.IoImage,
			imageOutline: Io5.IoImageOutline,
			images: Io5.IoImages,
			imagesOutline: Io5.IoImagesOutline,

			// Iconos de conectividad
			wifi: Io5.IoWifi,
			wifiOutline: Io5.IoWifiOutline,
			bluetooth: Io5.IoBluetooth,
			bluetoothOutline: Io5.IoBluetoothOutline,

			// Iconos de gestión de archivos
			document: Io5.IoDocument,
			documentOutline: Io5.IoDocumentOutline,
			documentText: Io5.IoDocumentText,
			documentTextOutline: Io5.IoDocumentTextOutline,
			folder: Io5.IoFolder,
			folderOutline: Io5.IoFolderOutline,
			folderOpen: Io5.IoFolderOpen,
			folderOpenOutline: Io5.IoFolderOpenOutline,
			save: Io5.IoSave,
			saveOutline: Io5.IoSaveOutline,
			download: Io5.IoDownload,
			downloadOutline: Io5.IoDownloadOutline,
			cloud: Io5.IoCloud,
			cloudOutline: Io5.IoCloudOutline,
			cloudUpload: Io5.IoCloudUpload,
			cloudUploadOutline: Io5.IoCloudUploadOutline,
			cloudDownload: Io5.IoCloudDownload,
			cloudDownloadOutline: Io5.IoCloudDownloadOutline,
			fileTrayFull: Io5.IoFileTrayFull, // Añadido el icono solicitado
			fileTrayFullOutline: Io5.IoFileTrayFullOutline,
			fileTray: Io5.IoFileTray,
			fileTrayOutline: Io5.IoFileTrayOutline,
			fileTrayStacked: Io5.IoFileTrayStacked,
			fileTrayStackedOutline: Io5.IoFileTrayStackedOutline,
			archive: Io5.IoArchive,
			archiveOutline: Io5.IoArchiveOutline,
			trash: Io5.IoTrash,
			trashOutline: Io5.IoTrashOutline,
			trashBin: Io5.IoTrashBin,
			trashBinOutline: Io5.IoTrashBinOutline,

			// Iconos de herramientas
			settings: Io5.IoSettings,
			settingsOutline: Io5.IoSettingsOutline,
			options: Io5.IoOptions,
			optionsOutline: Io5.IoOptionsOutline,
			build: Io5.IoBuild,
			buildOutline: Io5.IoBuildOutline,
			hammer: Io5.IoHammer,
			hammerOutline: Io5.IoHammerOutline,
			construct: Io5.IoConstruct,
			constructOutline: Io5.IoConstructOutline,
			flashlight: Io5.IoFlashlight,
			flashlightOutline: Io5.IoFlashlightOutline,

			// Iconos de aplicaciones
			home: Io5.IoHome,
			homeOutline: Io5.IoHomeOutline,
			search: Io5.IoSearch,
			searchOutline: Io5.IoSearchOutline,
			heart: Io5.IoHeart,
			heartOutline: Io5.IoHeartOutline,
			star: Io5.IoStar,
			starOutline: Io5.IoStarOutline,
			person: Io5.IoPerson,
			personOutline: Io5.IoPersonOutline,
			people: Io5.IoPeople,
			peopleOutline: Io5.IoPeopleOutline,
			notifications: Io5.IoNotifications,
			notificationsOutline: Io5.IoNotificationsOutline,
			time: Io5.IoTime,
			timeOutline: Io5.IoTimeOutline,
			calendar: Io5.IoCalendar,
			calendarOutline: Io5.IoCalendarOutline,
			location: Io5.IoLocation,
			locationOutline: Io5.IoLocationOutline,
			map: Io5.IoMap,
			mapOutline: Io5.IoMapOutline,
			navigate: Io5.IoNavigate,
			navigateOutline: Io5.IoNavigateOutline,
			cart: Io5.IoCart,
			cartOutline: Io5.IoCartOutline,
			bag: Io5.IoBag,
			bagOutline: Io5.IoBagOutline,
			pricetag: Io5.IoPricetag,
			pricetagOutline: Io5.IoPricetagOutline,

			// Iconos de acción y notificación
			add: Io5.IoAdd,
			remove: Io5.IoRemove,
			close: Io5.IoClose,
			checkmark: Io5.IoCheckmark,
			checkmarkDone: Io5.IoCheckmarkDone,
			alert: Io5.IoAlert,
			alertOutline: Io5.IoAlertOutline,
			warning: Io5.IoWarning,
			warningOutline: Io5.IoWarningOutline,
			ban: Io5.IoBan,
			banOutline: Io5.IoBanOutline,
			key: Io5.IoKey,
			keyOutline: Io5.IoKeyOutline,
			lock: Io5.IoLockClosed,
			lockOutline: Io5.IoLockClosedOutline,
			unlock: Io5.IoLockOpen,
			unlockOutline: Io5.IoLockOpenOutline,
			eyeOn: Io5.IoEye,
			eyeOnOutline: Io5.IoEyeOutline,
			eyeOff: Io5.IoEyeOff,
			eyeOffOutline: Io5.IoEyeOffOutline,

			// Iconos de datos y gráficos
			barChart: Io5.IoBarChart,
			barChartOutline: Io5.IoBarChartOutline,
			pieChart: Io5.IoPieChart,
			pieChartOutline: Io5.IoPieChartOutline,
			stats: Io5.IoStats,
			statsOutline: Io5.IoStatsOutline,
			analytics: Io5.IoAnalytics,
			analyticsOutline: Io5.IoAnalyticsOutline,
			trending: Io5.IoTrendingUp,
			trendingDown: Io5.IoTrendingDown,

			// Iconos divertidos
			airplane: Io5.IoAirplane,
			airplaneOutline: Io5.IoAirplaneOutline,
			rocket: Io5.IoRocket,
			rocketOutline: Io5.IoRocketOutline,
			planet: Io5.IoPlanet,
			planetOutline: Io5.IoPlanetOutline,
			restaurant: Io5.IoRestaurant,
			restaurantOutline: Io5.IoRestaurantOutline,
			cafe: Io5.IoCafe,
			cafeOutline: Io5.IoCafeOutline,
			beer: Io5.IoBeer,
			beerOutline: Io5.IoBeerOutline,
			pizza: Io5.IoPizza,
			pizzaOutline: Io5.IoPizzaOutline,
			paw: Io5.IoPaw,
			pawOutline: Io5.IoPawOutline,
			football: Io5.IoFootball,
			footballOutline: Io5.IoFootballOutline,
			basketball: Io5.IoBasketball,
			basketballOutline: Io5.IoBasketballOutline,
			tennisball: Io5.IoTennisball,
			tennisballOutline: Io5.IoTennisballOutline,

			// Iconos de clima
			sunny: Io5.IoSunny,
			sunnyOutline: Io5.IoSunnyOutline,
			partlySunny: Io5.IoPartlySunny,
			partlySunnyOutline: Io5.IoPartlySunnyOutline,
			cloudy: Io5.IoCloudy,
			cloudyOutline: Io5.IoCloudyOutline,
			rainy: Io5.IoRainy,
			rainyOutline: Io5.IoRainyOutline,
			umbrella: Io5.IoUmbrella,
			umbrellaOutline: Io5.IoUmbrellaOutline,
			thunderstorm: Io5.IoThunderstorm,
			thunderstormOutline: Io5.IoThunderstormOutline,
			snow: Io5.IoSnow,
			snowOutline: Io5.IoSnowOutline,
			thermometer: Io5.IoThermometer,
			thermometerOutline: Io5.IoThermometerOutline,

			// Iconos misc
			pulse: Io5.IoPulse,
			pulseOutline: Io5.IoPulseOutline,
			radio: Io5.IoRadio,
			radioOutline: Io5.IoRadioOutline,
			extLink: Io5.IoOpenOutline,
			logoGithub: Io5.IoLogoGithub,
			logoTwitter: Io5.IoLogoTwitter,
			logoFacebook: Io5.IoLogoFacebook,
			logoInstagram: Io5.IoLogoInstagram,
			logoLinkedin: Io5.IoLogoLinkedin,
			fingerPrint: Io5.IoFingerPrint,
			flame: Io5.IoFlame,
			flameOutline: Io5.IoFlameOutline,
			gift: Io5.IoGift,
			giftOutline: Io5.IoGiftOutline,
			infinite: Io5.IoInfinite,
			infiniteOutline: Io5.IoInfiniteOutline,
			medkit: Io5.IoMedkit,
			medkitOutline: Io5.IoMedkitOutline,
		}
	},
];

// Aplanar todas las categorías en un solo objeto para facilitar la búsqueda y acceso
const allIcons = iconCategories.reduce((acc, category) => {
	return { ...acc, ...category.icons };
}, {});

function IconSelector({ selectedIcon, onSelectIcon, iconColor }) {
	const [searchTerm, setSearchTerm] = useState('');
	const [isOpen, setIsOpen] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState(null);

	// Evitar scroll del body cuando el modal está abierto
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	// Filtrar iconos según el término de búsqueda y/o categoría
	let filteredIcons = [];

	if (searchTerm) {
		// Si hay término de búsqueda, buscar en todos los iconos
		filteredIcons = Object.entries(allIcons).filter(([name]) =>
			name.toLowerCase().includes(searchTerm.toLowerCase())
		).filter(([_, Icon]) => Icon !== undefined); // Filtrar cualquier icono undefined
	} else if (selectedCategory) {
		// Si hay categoría seleccionada, mostrar solo esa categoría
		const category = iconCategories.find(cat => cat.name === selectedCategory);
		if (category) {
			filteredIcons = Object.entries(category.icons).filter(([_, Icon]) => Icon !== undefined);
		}
	} else {
		// Si no hay búsqueda ni categoría, mostrar una selección de iconos populares
		filteredIcons = Object.entries(iconCategories[0].icons)
			.filter(([_, Icon]) => Icon !== undefined)
			.slice(0, 12);
	}

	const IconComponent = allIcons[selectedIcon];

	return (
		<div className="icon-selector">
			<div
				className="selected-icon"
				onClick={() => setIsOpen(!isOpen)}
			>
				{IconComponent && <IconComponent size={24} color={iconColor} />}
				<span>{selectedIcon}</span>
			</div>

			{isOpen && (
				<div className="icon-modal-overlay" onClick={() => setIsOpen(false)}>
					<div className="icon-modal" onClick={(e) => e.stopPropagation()}>
						<div className="icon-modal-header">
							<h3>Selecciona un Icono</h3>
							<button className="modal-close-button" onClick={() => setIsOpen(false)}>
								&times;
							</button>
						</div>

						<div className="icon-modal-search">
							<input
								type="text"
								placeholder="Buscar icono..."
								value={searchTerm}
								onChange={(e) => {
									setSearchTerm(e.target.value);
									setSelectedCategory(null); // Limpiar categoría al buscar
								}}
								className="icon-search"
								autoFocus
							/>
						</div>

						{!searchTerm && (
							<div className="categories-row">
								<button
									className={`category-button ${selectedCategory === null ? 'active' : ''}`}
									onClick={() => setSelectedCategory(null)}
								>
									Populares
								</button>
								{iconCategories.map((category) => (
									<button
										key={category.name}
										className={`category-button ${selectedCategory === category.name ? 'active' : ''}`}
										onClick={() => setSelectedCategory(category.name)}
									>
										{category.name}
									</button>
								))}
							</div>
						)}

						<div className="icons-grid">
							{filteredIcons.map(([name, Icon]) => (
								<div
									key={name}
									className={`icon-item ${selectedIcon === name ? 'selected' : ''}`}
									onClick={() => {
										onSelectIcon(name);
										setIsOpen(false);
									}}
									title={name}
								>
									<Icon size={32} /> {/* Aumentado el tamaño para mejor visibilidad */}
									<span>{name}</span>
								</div>
							))}
							{filteredIcons.length === 0 && (
								<div className="no-results">No se encontraron iconos</div>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

// Método estático para obtener un componente de icono por nombre
IconSelector.getIconComponent = function (iconName) {
	return allIcons[iconName] || null;
};

// Componente para renderizar un icono específico
IconSelector.Icon = function IconDisplay({ iconName, size, color }) {
	const IconComponent = allIcons[iconName];

	if (!IconComponent) {
		return null;
	}

	// Asegurar que el tamaño se aplique correctamente
	const sizeValue = typeof size === 'string' ? size : `${size}px`;

	return (
		<div
			className="icon-display"
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: '100%',
				height: '100%'
			}}
		>
			<IconComponent
				size={sizeValue}
				color={color}
				style={{
					width: sizeValue,
					height: sizeValue,
					display: 'block',
					flexShrink: 0
				}}
			/>
		</div>
	);
};

export default IconSelector;