

val name: String = "Tomik"
var greeting: String? = null

fun main(args: Array<String>) {

    //ssayHello()

    /*

    val greetingToPrint = when(greeting){
        null -> "Hi"
        else -> greeting
    }

    println(greetingToPrint)

    */

    val arr = arrayOf("A","B","C")
    println(arr.size)
    println(arr[0])
    println(arr.get(0))

    println("\n")
    /*
    for (item in arr){
        println(item)
    }

    arr.forEach { println(it) }

    println("\n")

    arr.forEach { item -> println(item) }

    arr.forEachIndexed{index,item -> println("$item is at index - $index")}
    */


    // immutable by default
    val list = listOf("A","B","C")

    val list2 = mutableListOf("A","B","C" )
    list2.add("D")

    val arr2 = arrayOf("A","B","C" )


    val map = mutableMapOf(1 to "a",2 to "b",3 to "c")
    map.forEach { key, value -> println("$key - $value") }
    map.put(4,"d")

    println("\n")
    //sayHello("Hi",list2)
    //sayHello("Bella Ciao","Kotlin","Programming")
    //sayHello("Salut",*arr2)

    //greetPerson(name ="Tom")

    sayHello(greeting ="Salut",itemsToGreet = *arr2)

    val person = Person("tomik","vargat")
    println(person.lastName)
}

//fun sayHello(): Unit = println("This is unit")

fun sayHello(greeting:String,vararg itemsToGreet: String) {
    itemsToGreet.forEach { itemToGreet ->
        println("$greeting $itemToGreet")
    }
}

fun greetPerson(greeting: String = "Hello",name: String = "Kotlin") = println("$greeting $name")