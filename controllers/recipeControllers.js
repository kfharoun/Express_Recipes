const { CuisineType, Recipe, Direction } = require('../models');
const mongoose = require('mongoose');


const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find().populate('cuisineType').populate('directions');
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllCusineTypes = async (req, res) => {
    try {
        const cuisineTypes = await CuisineType.find();
        res.status(200).json(cuisineTypes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllDirections = async (req, res) => {
    try {
        const directions = await Direction.find();
        res.status(200).json(directions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getInfoById = async (req, res) => {
    const { id } = req.params;
    try {
        const recipe = await Recipe.findById(id).populate('cuisineType').populate('directions');
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteRecipe = async (req, res) => {
    const { id } = req.params;
    try {
        const recipe = await Recipe.findByIdAndDelete(id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const updateRecipe = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const recipe = await Recipe.findByIdAndUpdate(id, updateData, { new: true }).populate('cuisineType').populate('directions');
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createRecipe = async (req, res) => {
    const { name, ingredients, cuisineType, directions } = req.body;
    try {
        const newRecipe = new Recipe({ name, ingredients, cuisineType, directions });
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllRecipes,
    getAllCusineTypes,
    getAllDirections,
    getInfoById,
    deleteRecipe,
    updateRecipe,
    createRecipe
};

