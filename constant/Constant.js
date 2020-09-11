class Constant {
    static StartScreen = {
        logo: require('../assets/logo.png'),
        name: require('../assets/ten-nhom.png'),
        sologan: require('../assets/slogan.png'),
        goTo: 'Chọn loại căn hộ bạn muốn mua'
    }

    static CategoryScreen = {
        normal: require('../assets/apartment-icon.png'),
        studio: require('../assets/studio-icon.png'),
        officetel: require('../assets/Officetel.png'),
        condotel: require('../assets/Condotel.png'),
        normalname: 'Căn hộ bình thường',
        studioname: 'Studio',
        officetelname: 'Officetel',
        condotelname: 'Condotel',
        goTo: 'Chọn quận bạn cần tìm'
    }
    static LocationScreen = {
        BaDinh: require('../assets/BaDinh.png'),
        DongDa: require('../assets/DongDa.png'),
        HoanKiem: require('../assets/HoanKiem.png'),
        TayHo: require('../assets/TayHo.png'),
        CauGiay: require('../assets/CauGiay.png'),
        HaiBaTrung: require('../assets/HaiBaTrung.png'),
        HoangMai: require('../assets/HoangMai.png'),
        ThanhXuan: require('../assets/ThanhXuan.png'),

        BaDinh_text: 'Ba Đình',
        DongDa_text: 'Đống Đa',
        HoanKiem_text: 'Hoàn Kiếm',
        TayHo_text: 'Tây Hồ',
        CauGiay_text: 'Cầu Giấy',
        HaiBaTrung_text: 'Hai Bà Trưng',
        HoangMai_text: 'Hoàng Mai',
        ThanhXuan_text: 'Thanh Xuân',
        goTo:'Ngân sách của bạn là bao nhiêu ?'
    }

    static MoneyScreen = {
        cost_1: require('../assets/cost_1.png'),
        cost_2: require('../assets/cost_2.png'),
        cost_3: require('../assets/cost_3.png'),
        cost_4: require('../assets/cost_4.png'),
        cost_5: require('../assets/cost_5.png'),
        cost_6: require('../assets/cost_6.png'),

        cost_1_text: '0 - 500 triệu',
        cost_2_text: '500 triệu - 1 tỷ',
        cost_3_text: '1- 3 tỷ',
        cost_4_text: '3-5 tỷ',
        cost_5_text: '5-7 tỷ',
        cost_6_text: 'Trên 7 tỷ',
        goTo: 'Search'
    }
    static SearchResultScreen = {
        bedroom: require('../assets/phong-ngu-icon.png'),
        bathroom: require('../assets/nha-tam-icon.png'),
        banner: require('../assets/banner.png'),
        goTo :'Details',
        
    }
    static ProductDetailsScreen = {
        
        goTo :'Contact'
    }
    static ContactScreen = {
        
        goTo :'Contact_true'
    }
    static MarketScreen = {
        
        goTo :'Market'
    }
    static fisrtquery = {
        
    }

    static WebviewScreen = {
        
        goTo :'Webview'
    }
    static ProjectWebviewScreen = {

        goTo :'ProjectWebview'
    }
    
}


export default Constant;