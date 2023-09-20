<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameOrder extends Model
{
    use HasFactory;
    protected $table = 'gameOrders';
    public function getGameId()
    {
        return $this->attributes['gameId'];
    }
    public function setGameId($gameID)
    {
        $this->attributes['gameId'] = $gameID;
    }
    public function getOrderId()
    {
        return $this->attributes['orderId'];
    }
    public function setOrderId($orderId)
    {
        $this->attributes['orderId'] = $orderId;
    }
    public function getQuantity()
    {
        return $this->attributes['quantity'];
    }
    public function setQuantity($quantity)
    {
        $this->attributes['quantity'] = $quantity;
    }
    public function getPrice()
    {
        return $this->attributes['price'];
    }
    public function setPrice($price)
    {
        $this->attributes['price'] = $price;
    }
    public function game()
    {
        return $this->belongsTo(Game::class, 'gameId');
    }

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
