

exports.cart = (req,res,next) => {
    res.json({ message: "Cart"})
}


exports.addCartItem = (req,res,next) => {
    const {addCartItemId} = req.params
    res.json({ message: addCartItemId +  " item"})
}

exports.deleteCartItem = (req,res,next) => {
 const {deletecartitemid} = req.params
res.json({ message: deletecartitemid + " item" })

}