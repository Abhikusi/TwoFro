import jwt from 'jsonwebtoken'

const gererateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

export default gererateToken