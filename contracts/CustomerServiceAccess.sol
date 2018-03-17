pragma solidity ^0.4.17;

contract CustomerServiceAccess {
    
    struct Place {
        address owner;
        uint256 number;
        bool availableForSale;
        uint256 price;
    }
    
    Place[10] places;
    
    function CustomerServiceAccess() public {
        
        uint256 x = 0;
        while(x < places.length)
        {
            places[x].number = x;
            places[x].owner = msg.sender;
            places[x].availableForSale = false;
            places[x].price = x; 
            x++;
        }
            places[1].number = x;
            places[1].owner = 0x00cb5022266f4d099c09bfafda786975f737072abc;
            places[1].availableForSale = true;
            places[1].price = x; 
    }
    
    function getCount () public constant returns (uint256) {
        return places.length;
    }
    
    function getBasicData (uint256 index) public constant returns (address owner, uint256 number, bool availableForSale, uint256 price) {
        Place place = places[index]; 
        return (place.owner,place.number,place.availableForSale,place.price);
    }
    
    function Sell (uint256 index, uint256 price)  public onlyOwner(index) 
    {
        Place place = places[index];
        place.price = price;
        place.availableForSale = true;
    } 
    
    function CancelSell (uint256 index) public onlyOwner(index)
    {
        Place place = places[index];
        place.availableForSale = false;
    }     

    function Buy (uint256 index) payable
    {
        Place place = places[index];
        if (place.availableForSale != true) { throw; }
        place.owner = msg.sender;
        place.availableForSale = false;
        //address owner = 0x000569379b56a0be94d8f0a1b5fb16869e022639e7;
        place.owner.send(place.price);
    }    
    
    modifier onlyOwner(uint256 index) {
         Place place = places[index];
        if (msg.sender != place.owner) { throw; }
        _; // Will be replaced with function body
    }
}