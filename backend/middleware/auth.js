import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;
        if(token && isCustomAuth) {
            decodedData = jwt.token.verify(token, 'test');
            req.usreId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);
            req.userId = decodeData?.sub;
        }
        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;