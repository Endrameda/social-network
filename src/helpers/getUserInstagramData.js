const getUserInstagramData = (userName) => {
    if (userName !== null) {
        return fetch(`https://www.instagram.com/${userName}/?__a=1`)
    }

    return false
}

export default getUserInstagramData