import { errorHandler } from "../utils/error.js";
import Project from "../models/project.model.js";

export const create = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, "You are not allowed to create the project"));
  }
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, "Please provide all required fileds"));
  }
  // slug the project title for seo indexing
  const slug = req.body.title
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, "");
  const newProject = new Project({
    ...req.body,
    slug,
    userId: req.user.id,
  });
  try {
    const saveProject = await newProject.save();
    res.status(201).json(saveProject);
  } catch (error) {
    next(error);
  }
};

export const getprojects = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === "asc" ? 1 : -1;
    const projects = await Project
      .find({
        ...(req.query.userId && { userId: req.query.userId }),
        ...(req.query.category && { category: req.query.category }),
        ...(req.query.slug && { slug: req.query.slug }),
        ...(req.query.projectId && { _id: req.query.projectId }),
        ...(req.query.projectId && { _id: req.query.projectId }),
        ...(req.query.searchItem && {
          $or: [
            { title: { $regex: req.query.searchItem, $options: "i" } },
            { content: { $regex: req.query.searchItem, $options: "i" } },
          ],
        }),
      })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);
    // Counting total project
    const totalProject = await Project.countDocuments();
    // Current Month
    const now = new Date();
    // Counting last month Project
    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1, //last month
      now.getDate()
    );
    const lastMonthProjects = await Project.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });
    res.status(200).json({
      projects,
      totalProject,
      lastMonthProjects,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteproject = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(
      errorHandler(403, "You are nor allowed to delete this project")
    );
  }
  try {
    await Project.findByIdAndDelete(req.params.projectId);
    res.status(200).json("This project has been deleted");
  } catch (error) {
    next(error);
  }
};

export const updateproject = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(
      errorHandler(403, "You are not allowed to update this project")
    );
  }
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.projectId,
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
          category: req.body.category,
          image: req.body.image,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedProject);
  } catch (error) {
    next(error);
  }
};
