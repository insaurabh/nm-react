import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { formatDate } from '../utils/helper';
import CardShimmer from '../Shimmers/Card';

function RecipeDetail() {
    const { slug } = useParams();

    const recipe = useLoaderData(slug);

    console.log('recipe', recipe)
    if (recipe?.length === 0) {
        return <CardShimmer />
    }
    return (
        <div className='recipe-info'>
            <h1>{recipe?.name}</h1>
            <span>Feature in: 10 Easy And Fancy Dinner Recipes</span>
            <h2>{recipe?.description}</h2>
            <span>⏲️{recipe?.total_time_tier?.display_tier}</span>
            <div className="recipe-info_team">
                <span>Team</span>
                {

                    recipe?.credits?.map((r, index) => {
                        return (
                            <span key={`credits-${index}`}>{r.name}</span>
                        )
                    })
                }
            </div>

            <div className='date-field'>{formatDate(recipe.updated_at)}</div>

            <div className='row'>
                <div className='left-col'>
                    <div className='ingredients-container'>
                        <h3>Ingredients:</h3>
                        {
                            recipe?.sections[0]?.components?.map((r, index) => {
                                return (
                                    <div className="recipe-info_instruction" key={`ingredients-${index}`}>
                                        <p>{r.raw_text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <h3>Preparation:</h3>
                        {
                            recipe?.instructions.map((instruction) => {
                                return (
                                    <div className="recipe-info_instruction" key={instruction.id}>
                                        <p>{instruction.display_text}</p>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
                <div className='right-col'>
                    <img src={recipe?.thumbnail_url} alt="Recipe image" title={recipe.name} />
                </div>
            </div>
            <span>Servings: {recipe?.num_servings}</span>

            <span>Nutrition:</span>
            {
                Object.entries(recipe?.nutrition).map(([key, value]) => {
                    if (key !== 'updated_at') {
                        return (
                            <div key={key}>
                                <p>{key} : {value}</p>
                            </div>
                        )
                    }
                })
            }

            <span className='recipe-info_keywords'>{recipe?.keywords}</span>
        </div>
    )
}

export default RecipeDetail