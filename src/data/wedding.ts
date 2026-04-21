  /** Ngày giờ đại lễ — đổi tại đây để countdown & nội dung khớp */
  export const WEDDING_ISO = '2026-12-15T09:00:00+07:00'

  export const couple = {
    short: 'Quang & Châu',
    groomShort: 'Minh Quang',
    brideShort: 'Bảo Châu',
    groomFull: 'Trương Nguyễn Minh Quang',
    brideFull: 'Nguyễn Bảo Châu',
    displayPair: 'Minh Quang & Bảo Châu',
  }

  export const hero = {
    sub: 'Chúng mình cưới, 12 tháng 12 năm 2026',
  }

  export const groomIntro = {
    quote:
      'Thật tuyệt với khi chúng ta tìm thấy và là một phần của cuộc đời nhau. Anh mong đoạn đường sắp tới của chúng ta sẽ luôn là tuyệt vời nhất',
  }

  export const brideIntro = {
    quote:
      'Gặp nhau là duyên phận, đi cùng nhau là lựa chọn. Em mong được nắm tay anh bước vào hành trình mới thật ấm áp.',
  }

  export const family = {
    groom: {
      title: 'NHÀ TRAI',
      lines: ['Ông: Trương Văn Tiên', 'Bà: Nguyễn Thị Hết'],
    },
    bride: {
      title: 'NHÀ GÁI',
      lines: ['Ông: Nguyễn Tuấn Việt', 'Bà: Nguyễn Ngọc Thanh Ngân'],
    },
  }

  export const invite = {
    kicker: 'TRÂN TRỌNG KÍNH MỜI',
    line1: 'Bạn cùng gia đình',
    line2: '(Tới dự Lễ Thành Hôn của hai con chúng tôi)',
  }

  /** Lễ tại nhà trai (buổi sáng) — khác với tiệc nhà hàng buổi tối */
  export const eventMain = {
    time: 'Tổ chức vào lúc 18 giờ 00',
    date: 'Thứ Bảy, ngày 12 tháng 12 năm 2026',
    lunar:
      '(Tức ngày 04 tháng 11 năm Bính Ngọ — vui lòng đối chiếu lịch âm chính thức)',
    at: 'Tại nhà hàng Luxury palace:',
    address:
      '171 Đ. Nguyễn Thái Sơn, Hạnh Thông, Hồ Chí Minh',
    closing:
      'Sự hiện diện của Quý khách là niềm vinh hạnh của gia đình chúng tôi!',
  }

  /** Nối mạch giữa lễ nhà và tiệc nhà hàng (nội dung thường có trên thiệp điện tử) */
  export const eventBridge = {
    title: 'Buổi tối cùng ngày',
    lead:
      'Sau lễ thành hôn tại nhà trai, gia đình và hai con trân trọng kính mời Quý khách tới dự tiệc mừng tại nhà hàng Luxury Palace.',
    hint: 'Giờ giấc, địa chỉ và bản đồ chi tiết xem mục Làm lễ & Nhập tiệc phía dưới.',
  }

  export const dressCode = {
    title: 'Trang phục gợi ý',
    text: 'Áo dài, vest hoặc trang phục dự tiệc thanh lịch. Các tông màu nhạt, pastel, kem hoặc xanh sage được khuyến khích.',
  }

  export const hotline = {
    title: 'Liên hệ',
    groom: { label: 'Chú rể', phone: '0978 719 683' },
    bride: { label: 'Cô dâu', phone: '0778 805 534' },
  }

  export const storyLead = {
    eyebrow: 'Chuyện chúng mình',
    title: 'Bắt đầu như thế nào',
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
      date: '22 tháng 4, 2019',
      title: 'Lần đầu gặp',
      body: 'Chúng mình gặp nhau trong một buổi chiều ở quán cà phê nhỏ. Câu chuyện bắt đầu từ một nụ cười và tách cà phê còn hơi ấm.',
      image:
        'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=600&fit=crop&q=80',
      layout: 'circle',
      leaves: 'right',
      imageFirst: true,
    },
    {
      date: '02 tháng 11, 2020',
      title: 'Anh ngỏ lời yêu',
      body: 'Biển xanh, cát trắng và những lời chân thành — chúng mình chọn cùng nhau viết tiếp những trang mới.',
      image:
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop&q=80',
      layout: 'circle',
      leaves: 'left',
    },
    {
      date: '15 tháng 12, 2026',
      title: 'Đám cưới',
      body: 'Hôm nay chúng mình chính thức về chung một nhà. Cảm ơn bạn đã là một phần trong kỷ niệm đẹp này.',
      image:
        'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&h=700&fit=crop&q=80',
      layout: 'wide',
      leaves: null,
    },
  ]

  /** Album — nhiều ảnh như mockup gallery */
  export const galleryPhotos = [
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=600&fit=crop&q=80',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&q=80',
  ]

  export const schedule = [
    {
      title: 'Lễ ăn hỏi',
      image:
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500&h=500&fit=crop&q=80',
      dateLine: 'Thứ Hai,12 tháng 12, 2026',
      time: '1:00 chiều – 4:00 chiều',
      venue: 'Tại gia đình nhà Trai',
      address: '497/22 Đ. Phan Văn Trị, Phường 10, Gò Vấp, Hồ Chí Minh, Việt Nam',
      phone: 'Sđt: 0978719683',
      mapsUrl: 'https://maps.app.goo.gl/x7ptzUUNyjNPAZgU6',
    },
    {
      title: 'Tiệc cưới',
      image:
        'https://images.unsplash.com/photo-1529636798458-92182e662485?w=500&h=500&fit=crop&q=80',
      dateLine: 'Thứ Hai,12 tháng 12, 2026',
      time: '6:00 chiều – 9:00 chiều',
      venue: 'Nhà hàng tiệc cưới Luxury',
      address: '171 Đ. Nguyễn Thái Sơn, Hạnh Thông, Hồ Chí Minh',
      phone: 'Sđt: 02835882288',
      mapsUrl: 'https://maps.google.com',
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
        qrPlaceholder: 'QR cô dâu',
      },
      {
        label: 'Tài khoản chú rể',
        account: '0978719683',
        holder: 'TRUONG NGUYEN MINH QUANG',
        bank: 'Ngân hàng Shinhan',
        qrPlaceholder: 'https://drive.google.com/file/d/1McqtXVWPG2ateZs6Wj85Lp1LRlthSkkh/view?usp=drive_link',
      },
    ],
  }

  export const rsvp = {
    title: 'Xác nhận tham dự',
    subtitle:
      'Gia đình rất mong nhận được phản hồi của bạn trước ngày 25 tháng 11 năm 2026 để tiện sắp xếp chỗ ngồi.',
    note: 'Điền thông tin và gửi — thư sẽ mở ứng dụng email của bạn (không cần máy chủ).',
    emailTo: '',
    deadline: 'Hạn phản hồi: 25/11/2026',
  }

  export const footerClosing = {
    thankYou:
      'Cảm ơn bạn đã dành thời gian ghé thăm tấm thiệp nhỏ của chúng mình. Hẹn gặp trong ngày vui!',
    tagline: 'Với tất cả tình yêu thương',
  }

  export const images = {
    countdownBg:
      'https://drive.google.com/file/d/1CKbjX_RCpRlIDkhfx2sjwBcyonzL6WmE?w=1400&h=900&fit=crop&q=80',
    coupleOverlapLeft:
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=400&fit=crop&q=80',
    coupleOverlapRight:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop&q=80',
    bouquet:
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=300&h=300&fit=crop&q=80',
    videoCover:
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1200&h=675&fit=crop&q=80',
  }
