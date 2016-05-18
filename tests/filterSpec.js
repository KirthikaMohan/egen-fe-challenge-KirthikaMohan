

describe('Filters', function(){ //describe your object type
    beforeEach(module('myApp')); //load module
    
    describe('ccLogo',function(){ //describe your app name
    
        var ccLogo;    
        beforeEach(inject(function($filter){ //initialize your filter
            ccLogo = $filter('ccLogo',{});
        }));
        
        it('Should return the card Type', function(){  //write tests
            expect(ccLogo('4266841374393484')).toBe('visa'); //pass
            expect(ccLogo('12345678901')).toBe('default-icon'); //pass
            expect(ccLogo('4266841374393484')).toBe('visa');//pass
            expect(ccLogo('379726093321027')).toBe('american-express');//pass
            
        }); 
    
    });
    
})