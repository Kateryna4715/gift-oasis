<?php

namespace Database\Seeders;

use App\Models\Bestseller;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BestsellerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Bestseller::factory(8)->create();
    }
}
