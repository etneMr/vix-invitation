  /** Ngày giờ đại lễ — đổi tại đây để countdown & nội dung khớp */
  export const WEDDING_ISO = '2026-12-12T18:00:00+07:00'

  export const couple = {
    short: 'Quang & Châu',
    groomShort: 'Minh Quang',
    brideShort: 'Bảo Châu',
    groomFull: 'Trương Nguyễn Minh Quang',
    brideFull: 'Nguyễn Bảo Châu',
    displayPair1: 'Minh Quang ',
    displayPair2: '&',
    displayPair3: 'Bảo Châu',
    displayPair: '/saveTheDate.png',
  }

  export const hero = {
    sub: 'Chúng mình cưới ngày, 12 tháng 12 năm 2026',
  }

  export const groomIntro = {
    quote:
      '"Thật tuyệt với khi chúng ta tìm thấy và là một phần của cuộc đời nhau. Anh mong đoạn đường sắp tới của chúng ta sẽ luôn là tuyệt vời nhất."',
  }

  export const brideIntro = {
    quote:
      '"Gặp nhau là duyên phận, đi cùng nhau là lựa chọn. Em mong được nắm tay anh bước vào hành trình mới thật ấm áp."',
  }

  export const family = {
    groom: {
      title: 'NHÀ TRAI',
      lines: ['Ông: Trương Văn Tiên','\u00A0', 'Bà: Nguyễn Thị Hết'],
    },
    bride: {
      title: 'NHÀ GÁI',
      lines: ['Ông: Nguyễn Văn Thanh', '(Cố phụ)', 'Bà: Nguyễn Thị Thới'],
    },
  }

  export const invite = {
    kicker: 'TRÂN TRỌNG KÍNH MỜI',
    line1: 'Bạn cùng gia đình',
    line2: '(Tới dự Lễ Thành Hôn của chúng mình)',
  }

  /** Lễ tại nhà trai (buổi sáng) — khác với tiệc nhà hàng buổi tối */
  export const eventMain = {
    time: 'Tổ chức vào lúc 18 giờ 00 thứ Bảy',
    date: '12.12.2026',
    at: 'Tại nhà hàng ',
    place:'Luxury palace: ',
    address:
      '171 Đ. Nguyễn Thái Sơn, Hạnh Thông, Hồ Chí Minh'

  }

  /** Nối mạch giữa lễ nhà và tiệc nhà hàng (nội dung thường có trên thiệp điện tử) */

  export const dressCode = {
    title: 'Trang phục gợi ý',
    text: 'Áo dài, vest hoặc trang phục dự tiệc thanh lịch. Các tông màu nhạt, pastel, kem hoặc xanh sage được khuyến khích.',
  }

  export const hotline = {
    title: 'Số điện thoại Liên hệ',
    groom: { label: 'Chú rể', phone: '0978 719 683' },
    bride: { label: 'Cô dâu', phone: '0778 805 534' },
  }

  export const storyLead = {
    eyebrow: 'Câu chuyện chúng mình',
    title: 'Đã diễn ra như thế nào',
  }

  export type TimelineItem = {
    date: string
    title: string
    body: string
    image: string
    layout: 'circle' | 'wide'
    leaves: 'left' | 'right' | null
    /** true = ảnh tròn trước, thẻ chữ sau (đúng mockup mục đầu) */
    imageFirst?: boolean
  }

  export const timeline: TimelineItem[] = [
    {
      date: '01 tháng 07, 2023',
      title: 'Lần đầu gặp',
      body: 'Giữa vô vàn những cuộc gặp gỡ, Facebook Dating đã trở thành nơi kết nối hai chúng mình. Bằng sự chân thành và những cuộc trò chuyện không ngừng, chúng mình dần bước vào cuộc sống của nhau một cách thật tự nhiên.',
      image:
        '/retro.png',
      layout: 'circle',
      leaves: 'right',
      imageFirst: true,
    },
    {
      date: '24 tháng 09, 2023',
      title: 'Nơi tình yêu bắt đầu',
      body: 'Trong một góc nhỏ của trung tâm mua sắm, chúng mình đã có buổi hẹn đầu tiên. Nơi ấy lưu giữ những bức ảnh đầu tiên của hai đứa, và cũng là nơi anh ngỏ lời, mở đầu cho câu chuyện tình yêu của chúng mình.',
      image:
        '/story-1.jpg',
      layout: 'circle',
      leaves: 'left',
    },
    {
      date: '08 tháng 10, 2025',
      title: 'Chương mới, câu chuyện mới',
      body: 'Dưới bầu trời đầy sao, giữa biển xanh, cát trắng và ánh trăng dịu dàng. Anh đã cầu hôn em bằng một chiếc nhẫn giấy chứa đựng tất cả sự chân thành và lời hứa về một tương lai, nơi chúng mình sẽ trở thành điều đặc biệt nhất trong cuộc đời của nhau.',
      image:
        '/story-2.jpg',
      layout: 'circle',
      leaves: 'right',
    },
    {
      date: '12 tháng 12, 2026',
      title: 'Bắt đầu hành trình',
      body: 'Thế là chúng mình sẽ cùng nhau viết nên chương truyện mới, những kỉ niệm cùng nhau. Cảm ơn gia đình, bạn bè và những người thân yêu đã luôn đồng hành, yêu thương, và có mặt để chứng kiến khoảnh khắc ý nghĩa này của chúng mình. Sự hiện diện của mọi người là món quà quý giá nhất dành cho tụi mình. Trân quý !',
      image:
        '/story-3.jpg',
      layout: 'wide',
      leaves: null,
    },
  ]

  /** Album — nhiều ảnh như mockup gallery */
  export const galleryPhotos = [
  '/list-1.JPG',
  '/list-2.JPG',
  '/list-3.jpg',
  '/list-4.jpg',
  '/list-5.jpg',
  '/list-6.jpg',
  ]

  export const schedule = [
    {
      title: 'Lễ rước dâu',
      image:
        '/lecuoi.JPG',
      dateLine: 'Thứ Bảy, 12 tháng 12, 2026',
      time: '1:00 chiều – 4:00 chiều',
      venue: 'Tại gia đình nhà Trai',
      address: '497/22 Đường Phan Văn Trị, Phường 10, Gò Vấp, HCM',
      phone: 'Sđt: 0978719683',
      mapsUrl: 'https://maps.app.goo.gl/LmYJ9aCR9zQtF1Pu8',
    },
    {
      title: 'Tiệc cưới',
      image:
        'damcuoi.JPG',
      dateLine: 'Thứ Bảy, 12 tháng 12, 2026',
      time: '6:00 chiều – 9:00 tối',
      venue: 'Nhà hàng tiệc cưới Luxury',
      address: '171 Đường Nguyễn Thái Sơn, Hạnh Thông, HCM',
      phone: 'Sđt: 02835882288',
      mapsUrl: 'https://maps.app.goo.gl/AYTVPr53QUCVbcdK8',
    },
  ]

  export const menuCategories = [
    {
      name: 'SÚP',
      items: ['Súp cần tây và bánh mì rang', 'Súp bí ngô với sô-cô-la'],
    },
    {
      name: 'ĂN NHẸ',
      items: ['Bánh kẹp gà', 'Nấm nhồi thịt'],
    },
    {
      name: 'MÓN CHÍNH',
      items: ['Thịt gà xông khói', 'Sò điệp rưới xốt cam'],
    },
    {
      name: 'TRÁNG MIỆNG',
      items: ['Bánh donut', 'Bánh mì cuộn hương quế'],
    },
    {
      name: 'ĐỒ UỐNG',
      items: ['Nước có ga', 'Bia Tiger','Nước lọc'],
    },
  ]

  export const gift = {
    hint: 'Gửi lời chúc',
    title: 'Đến cô dâu & chú rể',
    note:
      'Nếu bạn muốn gửi mừng, có thể chuyển khoản qua mã QR bên dưới. Mọi tấm lòng đều là niềm vui của chúng mình.',
    accounts: [
      {
        label: 'Tài khoản cô dâu',
        account: '123456789',
        holder: 'NGUYEN BAO CHAU',
        bank: 'Ngân hàng A',
        qrPlaceholder: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1200&h=675&fit=crop&q=80',
      },
      {
        label: 'Tài khoản chú rể',
        account: '0978719683',
        holder: 'TRUONG NGUYEN MINH QUANG',
        bank: 'Ngân hàng Shinhan',
        qrPlaceholder: '/QR-groom.jpg',
      },
    ],
  }

  export const rsvp = {
    title: 'Xác nhận tham dự',
    subtitle1:
      'Gia đình rất mong nhận được phản hồi của bạn trước ',
    subtitle2:' để tiện sắp xếp chỗ ngồi.',
    note: 'Điền thông tin và gửi phản hồi đến gia đình chúng tôi.',
    emailTo: '',
    deadline: 'ngày 25 tháng 11 năm 2026',
  }

  export const footerClosing = {
    thankYou:
      'Cảm ơn bạn đã dành thời gian ghé thăm tấm thiệp nhỏ của chúng mình. Hẹn gặp trong ngày vui!',
    tagline: 'Với tất cả tình yêu thương',
  }

  export const images = {
    countdownBg:
      '/Save-date.JPG',
    coupleOverlapLeft:
      'chure1-2.png',
    coupleOverlapRight:
      '/public/codau1-2.JPG',
    bouquet:
      '/public/boquet.JPG',
    videoCover:
      '/wedding-vid.mp4',
  }
