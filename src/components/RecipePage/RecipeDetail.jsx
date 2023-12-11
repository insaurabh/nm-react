import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { formatDate } from '../utils/helper';
import CardShimmer from '../Shimmers/Card';
import NutritionInfo from './NutritionInfo';

const recipeMock = {
    "language": "eng",
    "beauty_url": null,
    "facebook_posts": [],
    "tags": [
        {
            "id": 64444,
            "display_name": "North American",
            "type": "cuisine",
            "root_tag_type": "cuisine",
            "name": "north_american"
        },
        {
            "display_name": "Italian",
            "type": "european",
            "root_tag_type": "cuisine",
            "name": "italian",
            "id": 64453
        },
        {
            "root_tag_type": "meal",
            "name": "seafood",
            "id": 64459,
            "display_name": "Seafood",
            "type": "dinner"
        },
        {
            "name": "healthy",
            "id": 64466,
            "display_name": "Healthy",
            "type": "healthy",
            "root_tag_type": "healthy"
        },
        {
            "root_tag_type": "difficulty",
            "name": "easy",
            "id": 64471,
            "display_name": "Easy",
            "type": "difficulty"
        },
        {
            "root_tag_type": "difficulty",
            "name": "under_30_minutes",
            "id": 64472,
            "display_name": "Under 30 Minutes",
            "type": "difficulty"
        },
        {
            "display_name": "Dinner",
            "type": "meal",
            "root_tag_type": "meal",
            "name": "dinner",
            "id": 64486
        },
        {
            "display_name": "Date Night",
            "type": "occasion",
            "root_tag_type": "seasonal",
            "name": "date_night",
            "id": 64500
        },
        {
            "root_tag_type": "meal",
            "name": "weeknight",
            "id": 64505,
            "display_name": "Weeknight",
            "type": "dinner"
        },
        {
            "root_tag_type": "cuisine",
            "name": "fusion",
            "id": 65410,
            "display_name": "Fusion",
            "type": "cuisine"
        },
        {
            "id": 65848,
            "display_name": "Stove Top",
            "type": "appliance",
            "root_tag_type": "appliance",
            "name": "stove_top"
        },
        {
            "root_tag_type": "cooking_style",
            "name": "one_pot_or_pan",
            "id": 65855,
            "display_name": "One-Pot or Pan",
            "type": "cooking_style"
        },
        {
            "root_tag_type": "cooking_style",
            "name": "pan_fry",
            "id": 65859,
            "display_name": "Pan Fry",
            "type": "cooking_style"
        },
        {
            "root_tag_type": "seasonal",
            "name": "special_occasion",
            "id": 188967,
            "display_name": "Special Occasion",
            "type": "occasion"
        },
        {
            "root_tag_type": "equipment",
            "name": "pyrex",
            "id": 1247785,
            "display_name": "Pyrex",
            "type": "equipment"
        },
        {
            "id": 1247788,
            "display_name": "Spatula",
            "type": "equipment",
            "root_tag_type": "equipment",
            "name": "spatula"
        },
        {
            "display_name": "Tongs",
            "type": "equipment",
            "root_tag_type": "equipment",
            "name": "tongs",
            "id": 1247790
        },
        {
            "type": "equipment",
            "root_tag_type": "equipment",
            "name": "wooden_spoon",
            "id": 1247794,
            "display_name": "Wooden Spoon"
        },
        {
            "name": "chefs_knife",
            "id": 1280501,
            "display_name": "Chef's Knife",
            "type": "equipment",
            "root_tag_type": "equipment"
        },
        {
            "type": "equipment",
            "root_tag_type": "equipment",
            "name": "cutting_board",
            "id": 1280503,
            "display_name": "Cutting Board"
        },
        {
            "root_tag_type": "equipment",
            "name": "dry_measuring_cups",
            "id": 1280507,
            "display_name": "Dry Measuring Cups",
            "type": "equipment"
        },
        {
            "root_tag_type": "equipment",
            "name": "measuring_spoons",
            "id": 1280508,
            "display_name": "Measuring Spoons",
            "type": "equipment"
        },
        {
            "name": "pescatarian",
            "id": 3801552,
            "display_name": "Pescatarian",
            "type": "dietary",
            "root_tag_type": "dietary"
        },
        {
            "type": "business_tags",
            "root_tag_type": "business_tags",
            "name": "mccormick_easy_dinner",
            "id": 5143247,
            "display_name": "McCormick Easy Dinner"
        },
        {
            "type": "feature_page",
            "root_tag_type": "feature_page",
            "name": "tasty_ewd_comfort",
            "id": 6807663,
            "display_name": "Tasty EWD Comfort"
        },
        {
            "root_tag_type": "feature_page",
            "name": "mccormick_ugc_one_pot_pasta",
            "id": 6986105,
            "display_name": "McCormick UGC One Pot Pasta",
            "type": "feature_page"
        },
        {
            "root_tag_type": "feature_page",
            "name": "shoppable_recipes_family_dinner",
            "id": 7336056,
            "display_name": "Shoppable Recipes Family Dinner",
            "type": "feature_page"
        },
        {
            "root_tag_type": "difficulty",
            "name": "under_45_minutes",
            "id": 8091747,
            "display_name": "Under 45 Minutes",
            "type": "difficulty"
        },
        {
            "display_name": "Under 1 Hour",
            "type": "difficulty",
            "root_tag_type": "difficulty",
            "name": "under_1_hour",
            "id": 8091748
        },
        {
            "id": 8091917,
            "display_name": "High-Protein",
            "type": "healthy",
            "root_tag_type": "healthy",
            "name": "high_protein"
        },
        {
            "display_name": "Low-Sugar",
            "type": "healthy",
            "root_tag_type": "healthy",
            "name": "low_sugar",
            "id": 8091918
        },
        {
            "root_tag_type": "healthy",
            "name": "high_fiber",
            "id": 8091920,
            "display_name": "High-Fiber",
            "type": "healthy"
        },
        {
            "name": "pasta",
            "id": 9299522,
            "display_name": "Pasta",
            "type": "dinner",
            "root_tag_type": "meal"
        },
        {
            "display_name": "Seafood Pasta",
            "type": "pasta",
            "root_tag_type": "meal",
            "name": "seafood_pasta",
            "id": 9299624
        },
        {
            "name": "bushs_meal_planning",
            "id": 9835360,
            "display_name": "Bush's Meal Planning",
            "type": "business_tags",
            "root_tag_type": "business_tags"
        }
    ],
    "thumbnail_url": "https://img.buzzfeed.com/video-api-prod/assets/9ee2dadcbfcb4095872e6cdbaa24ff14/Thumb_A_FB.jpg",
    "video_url": "https://vid.tasty.co/output/9060/low_1472567601.m3u8",
    "updated_at": 1690236000,
    "prep_time_minutes": 15,
    "aspect_ratio": "1:1",
    "inspired_by_url": null,
    "seo_path": "9295813,64486,9299522,9299624",
    "renditions": [
        {
            "minimum_bit_rate": null,
            "name": "low",
            "maximum_bit_rate": null,
            "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/9060/1445289064805-h2exzu/1472567601_00001.png",
            "bit_rate": null,
            "content_type": "application/vnd.apple.mpegurl",
            "width": 1080,
            "aspect": "square",
            "height": 1080,
            "container": "mp4",
            "file_size": null,
            "url": "https://vid.tasty.co/output/9060/low_1472567601.m3u8",
            "duration": 0
        },
        {
            "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/9060/mp4_1280X720/1472567601_00001.png",
            "duration": 0,
            "aspect": "square",
            "name": "mp4_720x720",
            "width": 720,
            "minimum_bit_rate": null,
            "maximum_bit_rate": null,
            "container": "mp4",
            "file_size": null,
            "url": "https://vid.tasty.co/output/9060/mp4_1280X720/1472567601",
            "bit_rate": null,
            "content_type": "video/mp4",
            "height": 720
        },
        {
            "maximum_bit_rate": null,
            "container": "mp4",
            "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/9060/mp4_640x640/1472567601_00001.png",
            "file_size": null,
            "aspect": "square",
            "width": 640,
            "name": "mp4_640x640",
            "height": 640,
            "url": "https://vid.tasty.co/output/9060/mp4_640x640/1472567601",
            "duration": 0,
            "bit_rate": null,
            "content_type": "video/mp4",
            "minimum_bit_rate": null
        },
        {
            "container": "mp4",
            "file_size": null,
            "url": "https://vid.tasty.co/output/9060/mp4_720x1280/1472567601",
            "content_type": "video/mp4",
            "aspect": "square",
            "name": "mp4_720x720",
            "height": 720,
            "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/9060/mp4_720x1280/1472567601_00001.png",
            "duration": 0,
            "bit_rate": null,
            "width": 720,
            "minimum_bit_rate": null,
            "maximum_bit_rate": null
        }
    ],
    "user_ratings": {
        "count_positive": 11786,
        "score": 0.980125,
        "count_negative": 239
    },
    "is_subscriber_content": false,
    "approved_at": 1495656797,
    "is_one_top": false,
    "topics": [
        {
            "name": "Easy Dinner",
            "slug": "easy-dinner"
        },
        {
            "name": "Healthy Eating",
            "slug": "healthy"
        },
        {
            "name": "One-Pot Recipes",
            "slug": "one-pot"
        },
        {
            "slug": "romantic-dinners",
            "name": "Romantic Dinners"
        },
        {
            "name": "Dinner",
            "slug": "dinner"
        },
        {
            "name": "Pasta",
            "slug": "pasta"
        },
        {
            "slug": "american",
            "name": "American"
        },
        {
            "name": "Italian",
            "slug": "italian"
        }
    ],
    "video_ad_content": "none",
    "instructions": [
        {
            "position": 1,
            "display_text": "In a large pot, boil water and add pasta. Cook (stirring frequently) until al dente.",
            "start_time": 0,
            "appliance": null,
            "end_time": 4367,
            "temperature": null,
            "id": 369
        },
        {
            "position": 2,
            "display_text": "Drain and set pasta aside.",
            "start_time": 0,
            "appliance": null,
            "end_time": 0,
            "temperature": null,
            "id": 370
        },
        {
            "temperature": null,
            "id": 371,
            "position": 3,
            "display_text": "In the same pan, heat olive oil and 2 tablespoons of butter. Add garlic and crushed red pepper, cook until fragrant.",
            "start_time": 7000,
            "appliance": null,
            "end_time": 15000
        },
        {
            "appliance": null,
            "end_time": 21450,
            "temperature": null,
            "id": 372,
            "position": 4,
            "display_text": "Toss in shrimp, salt and pepper to taste, and stir until shrimp start to turn pink, but are not fully cooked.",
            "start_time": 16000
        },
        {
            "position": 5,
            "display_text": "Add oregano and spinach, cook until wilted.",
            "start_time": 22033,
            "appliance": null,
            "end_time": 26616,
            "temperature": null,
            "id": 373
        },
        {
            "end_time": 36816,
            "temperature": null,
            "id": 374,
            "position": 6,
            "display_text": "Return cooked pasta to the pot, add remaining butter, parmesan, and parsley. Stir until well mixed and the butter is melted.",
            "start_time": 27183,
            "appliance": null
        },
        {
            "start_time": 36967,
            "appliance": null,
            "end_time": 43072,
            "temperature": null,
            "id": 375,
            "position": 7,
            "display_text": "When the shrimp are cooked, add lemon juice, mix once more, then serve while hot."
        },
        {
            "display_text": "Enjoy!",
            "start_time": 45617,
            "appliance": null,
            "end_time": 49750,
            "temperature": null,
            "id": 376,
            "position": 8
        }
    ],
    "servings_noun_plural": "servings",
    "video_id": 1406,
    "sections": [
        {
            "components": [
                {
                    "measurements": [
                        {
                            "unit": {
                                "name": "gram",
                                "display_plural": "g",
                                "display_singular": "g",
                                "abbreviation": "g",
                                "system": "metric"
                            },
                            "quantity": "225",
                            "id": 740406
                        },
                        {
                            "unit": {
                                "system": "imperial",
                                "name": "ounce",
                                "display_plural": "oz",
                                "display_singular": "oz",
                                "abbreviation": "oz"
                            },
                            "quantity": "8",
                            "id": 740405
                        }
                    ],
                    "raw_text": "8 oz linguine",
                    "extra_comment": "",
                    "ingredient": {
                        "updated_at": 1509035281,
                        "name": "linguine",
                        "created_at": 1494014615,
                        "display_plural": "linguines",
                        "id": 176,
                        "display_singular": "linguine"
                    },
                    "id": 510,
                    "position": 1
                },
                {
                    "measurements": [
                        {
                            "unit": {
                                "abbreviation": "tbsp",
                                "system": "imperial",
                                "name": "tablespoon",
                                "display_plural": "tablespoons",
                                "display_singular": "tablespoon"
                            },
                            "quantity": "2",
                            "id": 740395
                        }
                    ],
                    "raw_text": "2 Tbsp. olive oil",
                    "extra_comment": "",
                    "ingredient": {
                        "display_plural": "olive oils",
                        "id": 4,
                        "display_singular": "olive oil",
                        "updated_at": 1509035290,
                        "name": "olive oil",
                        "created_at": 1493306183
                    },
                    "id": 511,
                    "position": 2
                },
                {
                    "raw_text": "8 Tbsp. (1 stick) unsalted butter",
                    "extra_comment": "1 stick",
                    "ingredient": {
                        "created_at": 1494806355,
                        "display_plural": "unsalted butters",
                        "id": 291,
                        "display_singular": "unsalted butter",
                        "updated_at": 1509035272,
                        "name": "unsalted butter"
                    },
                    "id": 512,
                    "position": 3,
                    "measurements": [
                        {
                            "quantity": "8",
                            "id": 740401,
                            "unit": {
                                "name": "tablespoon",
                                "display_plural": "tablespoons",
                                "display_singular": "tablespoon",
                                "abbreviation": "tbsp",
                                "system": "imperial"
                            }
                        }
                    ]
                },
                {
                    "measurements": [
                        {
                            "unit": {
                                "abbreviation": "clove",
                                "system": "none",
                                "name": "clove",
                                "display_plural": "cloves",
                                "display_singular": "clove"
                            },
                            "quantity": "4",
                            "id": 740396
                        }
                    ],
                    "raw_text": "4 cloves garlic, minced",
                    "extra_comment": "minced",
                    "ingredient": {
                        "display_singular": "garlic",
                        "updated_at": 1509035285,
                        "name": "garlic",
                        "created_at": 1493744766,
                        "display_plural": "garlics",
                        "id": 95
                    },
                    "id": 513,
                    "position": 4
                },
                {
                    "raw_text": "1 tsp crushed red pepper",
                    "extra_comment": "",
                    "ingredient": {
                        "created_at": 1494885083,
                        "display_plural": "red pepper flakes",
                        "id": 351,
                        "display_singular": "red pepper flake",
                        "updated_at": 1509035267,
                        "name": "red pepper flakes"
                    },
                    "id": 514,
                    "position": 5,
                    "measurements": [
                        {
                            "id": 740409,
                            "unit": {
                                "abbreviation": "tsp",
                                "system": "imperial",
                                "name": "teaspoon",
                                "display_plural": "teaspoons",
                                "display_singular": "teaspoon"
                            },
                            "quantity": "1"
                        }
                    ]
                },
                {
                    "measurements": [
                        {
                            "quantity": "570",
                            "id": 740403,
                            "unit": {
                                "system": "metric",
                                "name": "gram",
                                "display_plural": "g",
                                "display_singular": "g",
                                "abbreviation": "g"
                            }
                        },
                        {
                            "unit": {
                                "system": "imperial",
                                "name": "pound",
                                "display_plural": "lb",
                                "display_singular": "lb",
                                "abbreviation": "lb"
                            },
                            "quantity": "1 ¼",
                            "id": 740402
                        }
                    ],
                    "raw_text": "1¼ lbs large shrimp",
                    "extra_comment": "",
                    "ingredient": {
                        "id": 445,
                        "display_singular": "large shrimp",
                        "updated_at": 1509035260,
                        "name": "large shrimp",
                        "created_at": 1495072627,
                        "display_plural": "large shrimps"
                    },
                    "id": 515,
                    "position": 6
                },
                {
                    "raw_text": "Salt and pepper to taste",
                    "extra_comment": "to taste",
                    "ingredient": {
                        "created_at": 1493314644,
                        "display_plural": "salts",
                        "id": 22,
                        "display_singular": "salt",
                        "updated_at": 1509035288,
                        "name": "salt"
                    },
                    "id": 516,
                    "position": 7,
                    "measurements": [
                        {
                            "unit": {
                                "system": "none",
                                "name": "",
                                "display_plural": "",
                                "display_singular": "",
                                "abbreviation": ""
                            },
                            "quantity": "0",
                            "id": 740400
                        }
                    ]
                },
                {
                    "id": 12236,
                    "position": 8,
                    "measurements": [
                        {
                            "unit": {
                                "name": "",
                                "display_plural": "",
                                "display_singular": "",
                                "abbreviation": "",
                                "system": "none"
                            },
                            "quantity": "0",
                            "id": 740410
                        }
                    ],
                    "raw_text": "n/a",
                    "extra_comment": "to taste",
                    "ingredient": {
                        "id": 29,
                        "display_singular": "pepper",
                        "updated_at": 1509035287,
                        "name": "pepper",
                        "created_at": 1493314935,
                        "display_plural": "peppers"
                    }
                },
                {
                    "ingredient": {
                        "id": 45,
                        "display_singular": "dried oregano",
                        "updated_at": 1509035286,
                        "name": "dried oregano",
                        "created_at": 1493430175,
                        "display_plural": "dried oreganos"
                    },
                    "id": 517,
                    "position": 9,
                    "measurements": [
                        {
                            "unit": {
                                "system": "imperial",
                                "name": "teaspoon",
                                "display_plural": "teaspoons",
                                "display_singular": "teaspoon",
                                "abbreviation": "tsp"
                            },
                            "quantity": "1",
                            "id": 740407
                        }
                    ],
                    "raw_text": "1 tsp dried oregano",
                    "extra_comment": ""
                },
                {
                    "ingredient": {
                        "updated_at": 1509035279,
                        "name": "baby spinach",
                        "created_at": 1494210136,
                        "display_plural": "baby spinaches",
                        "id": 208,
                        "display_singular": "baby spinach"
                    },
                    "id": 518,
                    "position": 10,
                    "measurements": [
                        {
                            "unit": {
                                "display_plural": "g",
                                "display_singular": "g",
                                "abbreviation": "g",
                                "system": "metric",
                                "name": "gram"
                            },
                            "quantity": "160",
                            "id": 740397
                        },
                        {
                            "unit": {
                                "display_plural": "cups",
                                "display_singular": "cup",
                                "abbreviation": "c",
                                "system": "imperial",
                                "name": "cup"
                            },
                            "quantity": "4",
                            "id": 740394
                        }
                    ],
                    "raw_text": "4 cups baby spinach",
                    "extra_comment": ""
                },
                {
                    "raw_text": "¼ cup Parmesan",
                    "extra_comment": "grated",
                    "ingredient": {
                        "updated_at": 1509035285,
                        "name": "parmesan cheese",
                        "created_at": 1493743835,
                        "display_plural": "parmesan cheeses",
                        "id": 82,
                        "display_singular": "parmesan cheese"
                    },
                    "id": 519,
                    "position": 11,
                    "measurements": [
                        {
                            "unit": {
                                "system": "metric",
                                "name": "gram",
                                "display_plural": "g",
                                "display_singular": "g",
                                "abbreviation": "g"
                            },
                            "quantity": "25",
                            "id": 740399
                        },
                        {
                            "unit": {
                                "system": "imperial",
                                "name": "cup",
                                "display_plural": "cups",
                                "display_singular": "cup",
                                "abbreviation": "c"
                            },
                            "quantity": "¼",
                            "id": 740398
                        }
                    ]
                },
                {
                    "id": 520,
                    "position": 12,
                    "measurements": [
                        {
                            "quantity": "2",
                            "id": 740404,
                            "unit": {
                                "system": "imperial",
                                "name": "tablespoon",
                                "display_plural": "tablespoons",
                                "display_singular": "tablespoon",
                                "abbreviation": "tbsp"
                            }
                        }
                    ],
                    "raw_text": "2 Tbsp. parsley, chopped",
                    "extra_comment": "chopped",
                    "ingredient": {
                        "updated_at": 1509035283,
                        "name": "fresh parsley",
                        "created_at": 1493906396,
                        "display_plural": "fresh parsleys",
                        "id": 154,
                        "display_singular": "fresh parsley"
                    }
                },
                {
                    "extra_comment": "",
                    "ingredient": {
                        "name": "lemon juice",
                        "created_at": 1494624947,
                        "display_plural": "lemon juices",
                        "id": 271,
                        "display_singular": "lemon juice",
                        "updated_at": 1509035274
                    },
                    "id": 521,
                    "position": 13,
                    "measurements": [
                        {
                            "unit": {
                                "display_plural": "tablespoons",
                                "display_singular": "tablespoon",
                                "abbreviation": "tbsp",
                                "system": "imperial",
                                "name": "tablespoon"
                            },
                            "quantity": "1",
                            "id": 740408
                        }
                    ],
                    "raw_text": "1 Tbsp. lemon juice"
                }
            ],
            "name": null,
            "position": 1
        }
    ],
    "compilations": [
        {
            "video_id": 43415,
            "show": [
                {
                    "name": "Tasty",
                    "id": 17
                }
            ],
            "language": "eng",
            "beauty_url": null,
            "video_url": "https://vid.tasty.co/output/71466/hls24_1515191493.m3u8",
            "promotion": "full",
            "draft_status": "published",
            "approved_at": 1515330272,
            "name": "Top 5 Pasta Recipes",
            "canonical_id": "compilation:389",
            "id": 389,
            "aspect_ratio": null,
            "is_shoppable": false,
            "keywords": null,
            "description": null,
            "thumbnail_url": "https://s3.amazonaws.com/video-api-prod/assets/654d0916588d46c5835b7a5f547a090e/BestPastaFB.jpg",
            "thumbnail_alt_text": "",
            "buzz_id": null,
            "slug": "top-5-pasta-recipes",
            "country": "US",
            "facebook_posts": [],
            "created_at": 1515196894
        },
        {
            "canonical_id": "compilation:762",
            "video_id": 71604,
            "is_shoppable": false,
            "facebook_posts": [],
            "draft_status": "published",
            "video_url": "https://vid.tasty.co/output/116168/hls24_1542709148.m3u8",
            "country": "US",
            "created_at": 1542617553,
            "language": "eng",
            "beauty_url": null,
            "approved_at": 1542853976,
            "buzz_id": null,
            "slug": "7-pasta-recipes-for-all-pasta-lovers",
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/190190.jpg",
            "thumbnail_alt_text": "",
            "name": "7 Pasta Recipes For All Pasta Lovers",
            "id": 762,
            "aspect_ratio": "1:1",
            "keywords": null,
            "show": [
                {
                    "name": "Tasty",
                    "id": 17
                }
            ],
            "description": null,
            "promotion": "full"
        },
        {
            "country": "US",
            "language": "eng",
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/218445.jpg",
            "approved_at": 1559185178,
            "beauty_url": null,
            "buzz_id": null,
            "aspect_ratio": "1:1",
            "draft_status": "published",
            "promotion": "full",
            "slug": "12-easy-healthy-one-pot-recipes",
            "keywords": null,
            "facebook_posts": [],
            "created_at": 1559109720,
            "description": null,
            "thumbnail_alt_text": "",
            "id": 961,
            "is_shoppable": false,
            "show": [
                {
                    "name": "Goodful",
                    "id": 34
                }
            ],
            "video_url": "https://vid.tasty.co/output/134301/hls24_1559114530.m3u8",
            "name": "12 Easy & Healthy One-Pot Recipes",
            "canonical_id": "compilation:961",
            "video_id": 83146
        },
        {
            "facebook_posts": [],
            "created_at": 1561356446,
            "language": "eng",
            "name": "12 Delicious Seafood Dinners",
            "beauty_url": null,
            "promotion": "full",
            "aspect_ratio": "1:1",
            "is_shoppable": false,
            "description": null,
            "draft_status": "published",
            "thumbnail_alt_text": "",
            "video_url": "https://vid.tasty.co/output/136915/hls24_1561356644.m3u8",
            "approved_at": 1561604721,
            "id": 989,
            "country": "US",
            "video_id": 85800,
            "show": [
                {
                    "name": "Tasty",
                    "id": 17
                }
            ],
            "canonical_id": "compilation:989",
            "buzz_id": null,
            "keywords": null,
            "slug": "12-delicious-seafood-dinners",
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/222170.jpg"
        },
        {
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/231799.jpg",
            "thumbnail_alt_text": "",
            "video_url": "https://vid.tasty.co/output/143570/hls24_1567173147.m3u8",
            "video_id": 90441,
            "country": "US",
            "is_shoppable": false,
            "created_at": 1567173056,
            "language": "eng",
            "buzz_id": null,
            "facebook_posts": [],
            "show": [
                {
                    "name": "Tasty",
                    "id": 17
                }
            ],
            "draft_status": "published",
            "beauty_url": null,
            "canonical_id": "compilation:1109",
            "promotion": "full",
            "keywords": null,
            "description": null,
            "approved_at": 1567736223,
            "name": "4 Delicious and Simple Anytime Recipes",
            "aspect_ratio": "1:1",
            "id": 1109,
            "slug": "4-delicious-and-simple-anytime-recipes"
        },
        {
            "is_shoppable": false,
            "thumbnail_alt_text": "",
            "buzz_id": null,
            "aspect_ratio": "1:1",
            "keywords": null,
            "facebook_posts": [],
            "show": [
                {
                    "name": "Goodful",
                    "id": 34
                }
            ],
            "description": null,
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/236318.jpg",
            "canonical_id": "compilation:1144",
            "id": 1144,
            "draft_status": "published",
            "video_url": "https://vid.tasty.co/output/182170/hls24_1603110943.m3u8",
            "approved_at": 1569900560,
            "name": "7 Healthy Low-Calorie Seafood Dinners",
            "beauty_url": null,
            "slug": "7-healthy-low-calorie-seafood-dinners",
            "promotion": "full",
            "video_id": 89337,
            "country": "US",
            "created_at": 1569576863,
            "language": "eng"
        },
        {
            "is_shoppable": false,
            "draft_status": "published",
            "video_url": "https://vid.tasty.co/output/155166/hls24_1576480191.m3u8",
            "id": 1344,
            "promotion": "full",
            "aspect_ratio": "1:1",
            "country": "US",
            "approved_at": 1576544731,
            "canonical_id": "compilation:1344",
            "buzz_id": null,
            "slug": "7-pasta-recipes-you-ll-want-to-bookmark-asap",
            "video_id": 96627,
            "language": "eng",
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/248097.jpg",
            "created_at": 1576482734,
            "thumbnail_alt_text": "",
            "keywords": null,
            "show": [
                {
                    "name": "Tasty",
                    "id": 17
                }
            ],
            "name": "7 Pasta Recipes You'll Want To Bookmark ASAP",
            "beauty_url": null,
            "facebook_posts": [],
            "description": null
        },
        {
            "country": "US",
            "description": null,
            "thumbnail_alt_text": "",
            "buzz_id": null,
            "aspect_ratio": "1:1",
            "created_at": 1582916991,
            "id": 1416,
            "beauty_url": null,
            "language": "eng",
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/256974.jpg",
            "video_url": "https://vid.tasty.co/output/161468/hls24_1582917504.m3u8",
            "approved_at": 1582993216,
            "is_shoppable": false,
            "keywords": null,
            "facebook_posts": [],
            "draft_status": "published",
            "name": "5 Essential Shrimp Recipes",
            "video_id": 101263,
            "show": [
                {
                    "name": "Tasty",
                    "id": 17
                }
            ],
            "canonical_id": "compilation:1416",
            "slug": "5-essential-shrimp-recipes",
            "promotion": "full"
        },
        {
            "promotion": "full",
            "country": "US",
            "keywords": null,
            "facebook_posts": [],
            "approved_at": 1591116124,
            "slug": "must-have-pasta-dishes",
            "aspect_ratio": "1:1",
            "language": "eng",
            "thumbnail_alt_text": "",
            "video_url": "https://vid.tasty.co/output/168557/hls24_1590680892.m3u8",
            "name": "Must-Have Pasta Dishes",
            "created_at": 1590679834,
            "draft_status": "published",
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/267494.jpg",
            "beauty_url": null,
            "buzz_id": null,
            "video_id": 106383,
            "is_shoppable": false,
            "show": [
                {
                    "name": "Tasty",
                    "id": 17
                }
            ],
            "description": null,
            "canonical_id": "compilation:1501",
            "id": 1501
        },
        {
            "id": 1648,
            "buzz_id": null,
            "slug": "lemony-and-tangy-recipes",
            "keywords": null,
            "language": "eng",
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/278556.jpg",
            "name": "Lemony and Tangy Recipes",
            "country": "US",
            "created_at": 1597320057,
            "thumbnail_alt_text": "",
            "video_url": "https://vid.tasty.co/output/175982/hls24_1597321160.m3u8",
            "promotion": "full",
            "video_id": 110923,
            "aspect_ratio": "1:1",
            "facebook_posts": [],
            "description": "When life gives you lemons, make one of these recipes! These versatile lemon-forward dishes are easy to make and taste impressive. Not sure where to start? The <a href=\"https://tasty.co/recipe/creamy-lemon-chicken\">creamy lemon chicken</a> pairs well with just about anything, and the <a href=\"https://tasty.co/recipe/french-style-lemon-tart\">French-style lemon tart</a> will definitely have people coming back for another slice.\n",
            "draft_status": "published",
            "beauty_url": null,
            "is_shoppable": false,
            "show": [
                {
                    "name": "Tasty",
                    "id": 17
                }
            ],
            "approved_at": 1597417087,
            "canonical_id": "compilation:1648"
        },
        {
            "keywords": null,
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/300501.jpg",
            "thumbnail_alt_text": "",
            "video_url": "https://vid.tasty.co/output/189061/hls24_1608444527.m3u8",
            "canonical_id": "compilation:1988",
            "description": "You can never go wrong with shrimp, and these easy and delicious recipes will make sure everyone keeps coming back for seconds. Call your family and friends over for some <a href=\"https://tasty.co/recipe/fried-shrimp-and-mango-salsa-hand-rolls\">fried shrimp mango salsa hand roll-up</a> and whip up a couple of dozen honey <a href=\"https://tasty.co/recipe/hawaiian-garlic-shrimp\">Hawaiian garlic shrimp</a> and watch everyone go ham on the shrimp!",
            "aspect_ratio": "1:1",
            "show": [
                {
                    "name": "Tasty",
                    "id": 17
                }
            ],
            "beauty_url": null,
            "slug": "shrimp-lovers-only",
            "video_id": 121134,
            "language": "eng",
            "approved_at": 1609256992,
            "name": "Shrimp Lovers Only",
            "country": "US",
            "is_shoppable": false,
            "facebook_posts": [],
            "created_at": 1608444068,
            "draft_status": "published",
            "id": 1988,
            "buzz_id": null,
            "promotion": "full"
        },
        {
            "video_url": "https://vid.tasty.co/output/191825/hls24_1611951980.m3u8",
            "approved_at": 1612795066,
            "facebook_posts": [],
            "language": "eng",
            "buzz_id": null,
            "slug": "30-shrimp-recipes",
            "promotion": "full",
            "country": "US",
            "show": [
                {
                    "name": "Tasty",
                    "id": 17
                }
            ],
            "thumbnail_alt_text": "",
            "name": "30 Shrimp Recipes",
            "canonical_id": "compilation:2121",
            "beauty_url": null,
            "video_id": 122387,
            "aspect_ratio": "1:1",
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/305233.jpg",
            "created_at": 1611948923,
            "description": "Craving shrimp recipes? We’ve got you covered. But why settle for just one when we’ve curated 30 mouthwatering shrimp recipes to excite your tastebuds? Start with our crowd-pleasing Vegetable and <a href=\"https://tasty.co/recipe/vegetable-and-shrimp-lumpia\">Shrimp Lumpia</a> or try a fancy <a href=\"https://tasty.co/recipe/hawaiian-garlic-shrimp\">Hawaiian Garlic Shrimp and Mac Salad</a>. These impressive recipes won't let you down.",
            "draft_status": "published",
            "id": 2121,
            "is_shoppable": false,
            "keywords": null
        },
        {
            "buzz_id": null,
            "show": [
                {
                    "name": "Tasty",
                    "id": 17
                }
            ],
            "created_at": 1615809320,
            "language": "eng",
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/314886.jpg",
            "thumbnail_alt_text": "",
            "id": 2219,
            "is_shoppable": false,
            "video_url": "https://vid.tasty.co/output/198051/hls24_1617121116.m3u8",
            "beauty_url": null,
            "slug": "make-the-perfect-bowl-of-pasta-with-these-recipes",
            "promotion": "full",
            "keywords": null,
            "description": "We've curated a special assortment of pasta recipes just for you. From our unique <a href=\"https://tasty.co/recipe/tomato-and-anchovy-pasta\">tomato anchovy pasta</a> to mouth-watering <a href=\"https://tasty.co/recipe/one-pot-chicken-bacon-and-goat-cheese\">chicken, bacon and goat cheese pasta</a>, these recipes are made to impress! We're going to go eat our hearts out now: time to get cooking!",
            "approved_at": 1617195181,
            "canonical_id": "compilation:2219",
            "video_id": 127253,
            "aspect_ratio": "1:1",
            "country": "US",
            "facebook_posts": [],
            "draft_status": "published",
            "name": "Make The Perfect Bowl Of Pasta With These Recipes"
        },
        {
            "video_id": 132409,
            "language": "eng",
            "is_shoppable": false,
            "description": null,
            "thumbnail_alt_text": "",
            "approved_at": 1622553018,
            "buzz_id": null,
            "slug": "dinner-recipes-for-every-night-in-june",
            "promotion": "full",
            "country": "US",
            "show": [
                {
                    "name": "Tasty",
                    "id": 17
                }
            ],
            "created_at": 1621404764,
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/324707.jpg",
            "canonical_id": "compilation:2411",
            "beauty_url": null,
            "facebook_posts": [],
            "keywords": null,
            "draft_status": "published",
            "video_url": "https://vid.tasty.co/output/204546/hls24_1622408779.m3u8",
            "name": "Dinner Recipes For Every Night In June",
            "id": 2411,
            "aspect_ratio": "1:1"
        },
        {
            "approved_at": 1623078253,
            "canonical_id": "compilation:2421",
            "id": 2421,
            "keywords": null,
            "show": [
                {
                    "name": "Tasty",
                    "id": 17
                }
            ],
            "draft_status": "published",
            "buzz_id": null,
            "country": "US",
            "created_at": 1621919037,
            "language": "eng",
            "thumbnail_alt_text": "",
            "video_url": "https://vid.tasty.co/output/203847/hls24_1621920967.m3u8",
            "is_shoppable": false,
            "facebook_posts": [],
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/323472.jpg",
            "name": "Recipes Leos Will Love",
            "beauty_url": null,
            "slug": "recipes-leos-will-love",
            "promotion": "full",
            "video_id": 131655,
            "aspect_ratio": "1:1",
            "description": "If you are a Leo, we know you are trendy, outgoing and generous. So your food and drink choices should reflect that. Our cheese-stuffed <a href=\"https://tasty.co/recipe/loaded-cheesy-mashed-potato-balls\">mashed potato balls</a>  are a hit at any party, just like your dazzliing personality. And the lemon garlic s<a href=\"https://tasty.co/recipe/one-pot-lemon-garlic-shrimp-pasta\">shrimp pasta</a> is the perfect match for your luxurious vibe. We also recommend you celebrate your life with the <a href=\"https://tasty.co/recipe/mango-lime-cheesecake\">mango lime cheesecake/a>."
        },
        {
            "country": "US",
            "facebook_posts": [],
            "description": null,
            "thumbnail_alt_text": "",
            "name": "Make Healthy Snacks Tasty With These Recipes",
            "slug": "make-healthy-snacks-tasty-with-these-recipes",
            "promotion": "full",
            "aspect_ratio": "1:1",
            "is_shoppable": false,
            "show": [
                {
                    "name": "Tasty",
                    "id": 17
                }
            ],
            "draft_status": "published",
            "video_url": "https://vid.tasty.co/output/216394/hls24_1631879337.m3u8",
            "video_id": 141660,
            "keywords": null,
            "created_at": 1631878927,
            "language": "eng",
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/342984.jpg",
            "id": 2823,
            "beauty_url": null,
            "buzz_id": null,
            "approved_at": 1632837818,
            "canonical_id": "compilation:2823"
        },
        {
            "created_at": 1640249938,
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/359884.jpg",
            "thumbnail_alt_text": "",
            "video_url": "https://vid.tasty.co/output/227569/hls24_1640250244.m3u8",
            "name": "Recipes To Celebrate Moving Out Of Your Parents House",
            "keywords": null,
            "show": [
                {
                    "name": "Tasty",
                    "id": 17
                }
            ],
            "description": "Living on your own can get overwhelming having to keep up with grocery lists and meal prepping all by yourself. And that's why we've found just the right recipes that allow you to take it easy but also feel proud about taking care of yourself! The <a href=\"https://tasty.co/recipe/instant-noodle-lasagna-via-tasty-demais\">instant noodle lasagna</a> is a twist on a lazy staple. And of course brownies are a must for your midnight munchy routine. This one just needs<a href=\"https://tasty.co/recipe/the-best-one-bowl-brownies\">ONE bowl</a>! Bookmark this <a href=\"https://tasty.co/recipe/balsamic-chicken-and-veggies-meal-prep\">balsamic chicken and veggies meal prep</a> recipe to meet your daily veggies and protein intake for busy weeks. Time for some adultin'!",
            "language": "eng",
            "country": "US",
            "draft_status": "published",
            "approved_at": 1640885266,
            "id": 3024,
            "buzz_id": null,
            "slug": "recipes-to-celebrate-moving-out-of-your-parents-house",
            "aspect_ratio": "1:1",
            "facebook_posts": [],
            "canonical_id": "compilation:3024",
            "beauty_url": null,
            "promotion": "full",
            "video_id": 149248,
            "is_shoppable": false
        },
        {
            "language": "eng",
            "video_url": "https://vid.tasty.co/output/238274/hls24_1651651660.m3u8",
            "created_at": 1651651672,
            "draft_status": "published",
            "thumbnail_alt_text": "",
            "id": 3154,
            "beauty_url": null,
            "buzz_id": null,
            "slug": "a-healthy-start-to-your-day",
            "facebook_posts": [],
            "description": "Wake up in the morning and heat up last nights pizza? Is that you? Dont worry we have you covered! Start your day the healthy way by eating right! Your new day deserves and fresh and healthy start and with <a href=\"https://tasty.co/recipe/peanut-butter-energy-bites\">peanut-butter-energy-bites</a> or why not try our<a href=\"https://tasty.co/recipe/healthier-fried-rice\"> healthier-fried-rice </a>the options are endless! ",
            "approved_at": 1652285771,
            "canonical_id": "compilation:3154",
            "keywords": null,
            "show": [
                {
                    "name": "Tasty",
                    "id": 17
                }
            ],
            "is_shoppable": false,
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/376319.jpg",
            "name": "A Healthy Start To Your Day!",
            "promotion": "full",
            "video_id": 156750,
            "aspect_ratio": "1:1",
            "country": "US"
        },
        {
            "keywords": null,
            "show": [
                {
                    "name": "Tasty",
                    "id": 17
                }
            ],
            "description": "You should be taking advantage of these recipes especially when you're pressed for time in the kitchen! With these, you can whip up a divine <a href=\"https://tasty.co/recipe/spaghetti-squash-shrimp-scampi\">garlic shrimp scampi</a> within 30 minutes. Want to make a quick lunch for office? Make a healthy <a href=\"https://tasty.co/recipe/thai-tofu-collard-wraps\">thai tofu collard wraps</a> for lunch. Cooking has never been quicker!",
            "name": "Meals In Under 30 Minutes",
            "canonical_id": "compilation:3221",
            "is_shoppable": false,
            "draft_status": "published",
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/384919.jpg",
            "thumbnail_alt_text": "",
            "approved_at": 1661279623,
            "id": 3221,
            "buzz_id": null,
            "slug": "meals-in-under-30-minutes",
            "country": "US",
            "language": "eng",
            "video_url": "https://vid.tasty.co/output/244191/hls24_1656330898.m3u8",
            "promotion": "full",
            "video_id": 160753,
            "aspect_ratio": "4:5",
            "facebook_posts": [],
            "created_at": 1656330892,
            "beauty_url": null
        },
        {
            "thumbnail_alt_text": "",
            "id": 3338,
            "slug": "7-days-7-pasta-dishes",
            "country": "US",
            "is_shoppable": false,
            "language": "eng",
            "description": "Who doesn't love pasta? Look forward to every single day of the week with these 7 amazing pasta dishes! You'll keep coming back for more, from creamy <a href=\"https://tasty.co/recipe/healthier-chicken-alfredo-pasta\"> Chicken Alfredo</a> to delectable <a href=\"https://tasty.co/recipe/one-pot-lemon-garlic-shrimp-pasta\"> Lemon and Garlic Spaghetti</a>! Satisfy your mid-week cravings with <a href=\"https://tasty.co/recipe/creamy-one-pot-spinach-shrimp-pasta\">Creamy One-Pot Spinach Shrimp Pasta</a>. Serve up some al dente goodness all week long!",
            "aspect_ratio": "1:1",
            "keywords": null,
            "show": [
                {
                    "id": 17,
                    "name": "Tasty"
                }
            ],
            "buzz_id": null,
            "draft_status": "published",
            "approved_at": 1674492751,
            "canonical_id": "compilation:3338",
            "video_url": "https://vid.tasty.co/output/269291/hls24_1673508832.m3u8",
            "name": "7 Days, 7 Pasta Dishes",
            "beauty_url": null,
            "promotion": "full",
            "video_id": 171239,
            "facebook_posts": [],
            "created_at": 1665745343,
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/405105.jpg"
        },
        {
            "keywords": null,
            "draft_status": "published",
            "beauty_url": null,
            "country": "US",
            "language": "eng",
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/434070.jpg",
            "approved_at": 1679668497,
            "name": "5 Zesty Citrus Recipes",
            "aspect_ratio": "1:1",
            "is_shoppable": false,
            "show": [
                {
                    "id": 17,
                    "name": "Tasty"
                }
            ],
            "created_at": 1679238023,
            "description": "Looking for a way to brighten up your meals? Look no further! Start your day off right with some fluffy <a href=\"https://tasty.co/recipe/lemon-ricotta-pancakes\">Lemon Ricotta Pancakes</a>. Then, cool off in the afternoon with a refreshing <a href=\"https://tasty.co/recipe/watermelon-lime-slushie\">Watermelon-Lime Slushie</a>. Whether you're looking for something sweet or tangy, this collection of recipes featuring lemon, lime, and other citrus fruits has you covered. Get ready to add some zest to your meals!",
            "thumbnail_alt_text": "",
            "slug": "lime-citrus-recipes",
            "video_id": 185631,
            "facebook_posts": [],
            "video_url": "https://vid.tasty.co/output/280020/hls24_1679654056.m3u8",
            "canonical_id": "compilation:3535",
            "id": 3535,
            "buzz_id": null,
            "promotion": "full"
        }
    ],
    "original_video_url": "https://s3.amazonaws.com/video-api-prod/assets/3de913d586424e189521e13eeee0222d/BFV10181_One-Pot_Lemon_Garlic_Shrimp_Pasta_FB1080SQ.mp4",
    "brand_id": null,
    "num_servings": 4,
    "total_time_tier": {
        "tier": "under_30_minutes",
        "display_tier": "Under 30 minutes"
    },
    "promotion": "full",
    "created_at": 1493235932,
    "price": {
        "consumption_total": 1000,
        "consumption_portion": 250,
        "total": 1600,
        "updated_at": "2023-11-18T06:15:10+01:00",
        "portion": 400
    },
    "is_shoppable": true,
    "nutrition_visibility": "auto",
    "show_id": 17,
    "tips_and_ratings_enabled": true,
    "description": "This easy 30-minute pasta recipe transforms ingredients that you already have in your kitchen into a posh, seafood dish you’ll want to serve at your next dinner party. And since the whole dish is made in a single pot, clean-up is easy. Don’t be surprised if this becomes your favorite quick go-to. ",
    "thumbnail_alt_text": "",
    "seo_title": "One-Pot Lemon Garlic Shrimp Pasta",
    "nutrition": {
        "carbohydrates": 49,
        "fiber": 4,
        "updated_at": "2022-10-02T08:11:38+02:00",
        "protein": 38,
        "fat": 37,
        "calories": 678,
        "sugar": 2
    },
    "is_app_only": false,
    "draft_status": "published",
    "id": 47,
    "servings_noun_singular": "serving",
    "keywords": null,
    "credits": [
        {
            "name": "Robert Broadfoot",
            "type": "internal"
        }
    ],
    "yields": "Servings: 4",
    "slug": "one-pot-lemon-garlic-shrimp-pasta",
    "show": {
        "id": 17,
        "name": "Tasty"
    },
    "canonical_id": "recipe:47",
    "name": "One-Pot Lemon Garlic Shrimp Pasta",
    "brand": null,
    "buzz_id": null,
    "total_time_minutes": 30,
    "cook_time_minutes": 15,
    "country": "US"
}
function RecipeDetail() {
    const { slug } = useParams();

    // const recipe = useLoaderData(slug);
    const recipe = recipeMock;
    if (recipe?.length === 0) {
        return <CardShimmer />
    }

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