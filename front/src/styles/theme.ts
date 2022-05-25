const globalTheme = {
    switchWidth: '40px',
    switchHeight: '20px',
    switchPadding: '3px',
    colorContrastLow: '#d3d3d4',
    colorWhite: '#FFF',
    switchColorPrimary: '#302C40',
    switchAnimationDuration: '0.2s',
    gradient: 'linear-gradient(122deg, rgba(128,74,216,1) 0%, rgba(98,75,217,1) 100%)',
    colorBlue: '#0560FD',
    colorRed: '#FA4F56',
    colorGreen: '#25C679',
    colorGray: '#adadad',
}


export const lightTheme = {
    primary: '#FFF',
    secondary: '#F8F8F8',
    textColor: '#202027',
    secondaryTextColor: '#676D7C',
    tertiaryTextColor: '#A0A6B1',
    header: '#585280',
    headerNumber: '#FFF',
    activeMenu: '#585280',
    logoBackground: '#E6EFFF',
    ...globalTheme
}

export const darkTheme = {
    primary: '#302C40',
    secondary: '#2C2839',
    secondaryTextColor: '#676D7C',
    tertiaryTextColor: '#A0A6B1',
    textColor: '#FFF',
    header: '#FFF',
    headerNumber: '#585280',
    activeMenu: '#FFF',
    logoBackground: '#121A2C',
    ...globalTheme
}
