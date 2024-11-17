public class LwcTest {
	
    public class Wrapper {

    @AuraEnabled public Integer id{get;set;}
    @AuraEnabled public String name{get;set;}
    
    	public Wrapper( Integer id, String name){
        	this.id = id;
        	this.name = name;
    	}
	}
    
    @AuraEnabled(cacheable=true)
    public static List<Wrapper> getdata(){
        
		List<Wrapper> data = new List<Wrapper>();
        data.add(new Wrapper(1, 'a')); 
        data.add(new Wrapper(2, 'b'));
        data.add(new Wrapper(3, 'c'));
        data.add(new Wrapper(4, 'd'));
        data.add(new Wrapper(5, 'e'));
        return data;
    }
}