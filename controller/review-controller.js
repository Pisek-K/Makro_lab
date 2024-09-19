const express = require("express");

const createError = require("../utils/createError");

const prisma = require("../config/prisma");

exports.createReview = async (req, res, next) => {
  try {
    const { title, userId, categoryId } = req.body;

    if (!title) {
      return createError(400, "Title to be provided");
    }

    if (typeof title !== "string") {
      return createError(400, "Title should be string");
    }

    if (!userId) {
      return createError(400, "User id to be provided");
    }

    if (typeof userId !== "number") {
      return createError(400, "User id should be number");
    }

    // check user exist

    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return createError(400, "User not found");
    }

    if (!categoryId) {
      return createError(400, "Category to be provided");
    }

    if (typeof categoryId !== "number") {
      return createError(400, "Category should be number");
    }

    const category = await prisma.category.findFirst({
      where: {
        id: categoryId,
      },
    });

    if (!category) {
      return createError(400, "Category not found");
    }

    const review = await prisma.review.create({
      data: {
        title,
        categories: {
          connect: {
            id: categoryId,
          },
        },
        authorId: userId,
      },
      include: {
        categories: true,
      },
    });

    res.json({review });
  } catch (err) {
    next(err);
  }
};
