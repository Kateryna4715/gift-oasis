<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Bestseller>
 */
class BestsellerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->text(20),
            'wrapping' => fake()->text(20),
            'comic' => fake()->text(20),
            'sweets' => fake()->text(50),
            'price' => fake()->numberBetween(35, 45),
            'image' =>fake()->text(40),
        ];
    }
}
