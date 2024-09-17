


exports.product = (req,res,next) => {
    res.json({message: "Product"})
}

exports.category = (req,res,next) => {
    const {categoryId} = req.params
    res.json({message: "category " + categoryId  })
}

exports.item = (req,res,next) => {
    const {itemId} = req.params
    res.json({message: "items " + itemId  })
}
