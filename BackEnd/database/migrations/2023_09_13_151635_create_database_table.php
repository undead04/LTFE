<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('role')->default('client');
            $table->integer('balance');

            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->double('total');
            $table->unsignedBigInteger('userId'); // Khóa ngoại

            $table->foreign('userId')->references('id')->on('members');
            $table->timestamps();
        });
        Schema::create('types', function (Blueprint $table) {
            $table->id();

            $table->string('typeNames');
            $table->timestamps();
        });
        Schema::create('games', function (Blueprint $table) {
            $table->id();
            $table->string('name_Game');
            $table->string('developer');
            $table->string('publisher');
            $table->string('image');
            $table->string('image-paner');
            $table->string('image-logo');
            $table->double('discount');
            $table->string('genre');
            $table->double('price');
            $table->text('description');
            $table->timestamps();
        });
        Schema::create('typeGames', function (Blueprint $table) {
            $table->unsignedBigInteger('gameId'); // Khóa ngoại GameID
            $table->foreign('gameId')->references('id')->on('games');
            $table->unsignedBigInteger('typeId'); // Khóa ngoại typeId
            $table->foreign('typeId')->references('id')->on('types');
            $table->timestamps();
        });
        Schema::create('gameOrders', function (Blueprint $table) {
            $table->unsignedBigInteger('orderId'); // Khóa ngoại Orderid
            $table->foreign('orderId')->references('id')->on('orders');
            $table->unsignedBigInteger('gameId'); // Khóa ngoại Gameid
            $table->foreign('gameId')->references('id')->on('games');
            $table->integer('quantity')->default(1);
            $table->double('price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('members');
        Schema::dropIfExists('orders');
        Schema::dropIfExists('types');
        Schema::dropIfExists('games');
        Schema::dropIfExists('typeGames');
        Schema::dropIfExists('gameOrders');
    }
};
