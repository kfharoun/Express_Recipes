const { CuisineType, Recipe, Direction } = require('../models')
const mongoose = require('mongoose')

const getAllRecipes = async (req, res) => {}


const getAllCusineTypes = async (req, res) => {}


const getAllDirections = async (req, res) => {}

const getInfoById = async (req, res) => {}


const deleteRecipe = async (req, res) => {}

const updateRecipe = async (req, res) => {}

const createRecipe = async (req, res) => {}


module.exports = {
    getAllRecipes,
    getAllCusineTypes,
    getAllDirections,  
    getInfoById, 
    deleteRecipe, 
    updateRecipe, 
    createRecipe
}

