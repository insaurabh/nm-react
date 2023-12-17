import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { formatDate } from '../utils/helper';
import CardShimmer from '../Shimmers/Card';
import NutritionInfo from './NutritionInfo';
import usePageTitle from '../utils/usePageTitle';

function RecipeDetail() {
    const { slug } = useParams();
    const recipe = useLoaderData(slug);
    // const recipe = recipeMock;
    if (recipe?.length === 0) {
        return <CardShimmer />
    }
    usePageTitle(recipe?.name)
    return (
        <div className='recipe-info grid  bg-white px-20 pt-4'>
            <h1 className=' text-5xl'>{recipe?.name}</h1>
            <div className='pb-4'>
                <span className='featured-in pt-6'>
                    Featured in: <a href="#" className='text-red-500'>10 Easy And Fancy Dinner Recipes</a>
                </span>
            </div>
            <h2 className='text-2xl pb-4'>{recipe?.description}</h2>

            <div className="recipe-info_team text-lg font-bold pb-2">
                <span>Team</span>
                {
                    recipe?.credits?.map((r, index) => {
                        return (
                            <span key={`credits-${index}`}>{r.name}</span>
                        )
                    })
                }
            </div>


            <div className='date-field text-slate-500 text-3xl'>{formatDate(recipe.updated_at)}</div>

            <div className='flex h-14'>
                <div className='flex flex-col pr-3 border-r-2'>
                    <span className='text-xl font-bold'>Total Time</span>
                    <span>⏲️{recipe?.total_time_tier?.display_tier} </span>
                </div>
                <div className='flex flex-col pr-3 pl-2 border-r-2'>
                    <span className='text-xl font-bold'>Prep Time</span>
                    <span>{recipe?.prep_time_minutes} </span>
                </div>
                <div className='flex flex-col pl-2'>
                    <span className='text-xl font-bold'>Cook Time</span>
                    <span>{recipe?.cook_time_minutes} </span>
                </div>
            </div>

            <div className='row flex mt-5'>
                <div className='left-col flex w-2/3 mr-2'>
                    <div className='ingredients-container w-1/3'>
                        <h3 className='text-lg font-bold'>Ingredients:</h3>
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
                    <div className='w-2/3'>
                        <h3 className='text-lg font-bold'>Preparation:</h3>
                        {
                            recipe?.instructions.map((instruction, i) => {
                                return (
                                    <div className="recipe-info_instruction flex pb-3" key={instruction.id}>
                                        <span className="pr-3 text-slate-500 font-bold">{++i}</span>
                                        <p>{instruction.display_text}</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                <div className='right-col w-1/3'>
                    <img src={recipe?.thumbnail_url} alt="Recipe image" title={recipe.name} />
                </div>
            </div>


            <span>Servings: {recipe?.num_servings}</span>

            <NutritionInfo nutrition={recipe?.nutrition} />

            <span className='recipe-info_keywords'>{recipe?.keywords}</span>
        </div>
    )
}

export default RecipeDetail