fun main(args: Array<String>) {

    /*

    val letter: Boolean;
    letter = true;
    println("$letter")


    val rawString: String = "I am raw string"
    val escapedString: String = "I am escaped string \n"

    println(escapedString)
    println(rawString)

    val numbers: IntArray = intArrayOf(1,2,3,4)
    println("number one bitches = "+numbers[0])

    val numbers2: MutableList<Int> = mutableListOf(1,2,3)
    val readOnlyView: List<Int> = numbers2 // immutable bro can't edit
    println("my mutable list - $numbers2")
    numbers2.add(4)
    println("my mutable list after $readOnlyView")

    */

    val items = listOf(1,2,3,4)

    println(items.first())
    println(items.last())
    println(items.filter { it % 2 == 0 })

    val i: Int = 2;
    if(i in 1..10){
        println(i)
    }

    val x: Int = 1;

    when(x) {
        1,2 -> println("number $x")

        else -> println("num not found")
    }


    val items2: List<Int> = listOf(1,2,3,4)
    for (item in items2) println(item)


    val items3: List<Int> = listOf(2,21,39,43,80)

    for((index,value) in items3.withIndex()){
        println("at $index is $value")
    }

    println("Example of Break and Continue")

    labelPica@ for (y in 1..10){
        if(y == 5){
            println("break block $y")
            break@labelPica
        } else {
            println("continue block $y")
            continue@labelPica
        }
    }

    val obj = myClass()
    obj.printName()

    val testClass = Test.Nested()

    testClass.printTest()

    val testClass2 = Outer().Class1().test()
    println(testClass2)

    // implementing interface, calling anonymous inner class
    var programmer: Human = object:Human {
        // overriding method from interface
        override fun think() {
            print("\nthinking about kotlin")
        }
    }

    programmer.think()

    val humanTest = Human2("Test Human",26)
    println("${humanTest.message} ${humanTest.firstName} Secondary constructor = ${humanTest.age}")

    val testInheritance = CBA()
    testInheritance.test()

    val testingInterface = InterfaceImp()
    println(testingInterface.myVar)
    println(testingInterface.absMethod())

    val testMultipleInterfaces = implementTwoInterfeces()
    testMultipleInterfaces.printMe()
    testMultipleInterfaces.printMe2()

    var a1 = Alien()
    a1.skills = "JAVA"

    var a2 = Alien()
    a2.skills = "SQL"

    var a3 = Alien()
    a3.skills = a1.addMySkills(a2)
    a3.printMySkills()

    println(TestCompanion.show())

    val obj2: TestSealedClass = TestSealedClass.OP1()

    val output = when (obj2) {
        is TestSealedClass.OP1 -> "OP 1"
        is TestSealedClass.OP2 -> "OP 2"
    }

    println(output)

    val object1 = genericExample<Int>(25)
    val object2 = genericExample<Double>(25.2)


    println("$object1 $object2")

    val b = BaseImpl(10)
    Derived(b).printMe()

    // tomu kus nerozumiem
    val myVar: String by lazy{
        "Hi"
    }

    println(myVar + "haha")

    val firstLambdaInKotlin: (String) -> Unit = {s -> println(s)}
    var textToPrint: String = "Hello Bitches"

    firstLambdaInKotlin(textToPrint)
    myFun(textToPrint,firstLambdaInKotlin)

    val s = User("Tomik","Varga")
    val (name,surname) = s
    println("My name is whaa my name is whaa čkčkčkčkčk $name $surname")

    try {
        val num: Int = 11
        val textString = "text string"
        textString.toInt()
    } catch (e:Exception){
        e.printStackTrace()
    } finally {
        println("Exception handling in Kotlin bitch")
    }

}

class myClass {
    private var name: String = "\nTest"

    fun printName(){
        println(name)
    }
}

class Test {
    class Nested {
        fun printTest(){
            println("\nnested class")
        }
    }
}


class Outer {
    private val test = "\nhaha"
    inner class Class1 {
        fun test() = test
    }
}

interface Human {
    fun think()
}

class Human2(val firstName: String, var age: Int){
    val message: String = "Hey!!!"
    constructor(name: String, age: Int,message: String) : this(name,age){}
}

open class ABC {
   open fun test(){
        print("ABC method test")
    }
}


class CBA: ABC() {
    override fun test() {
        // overridnutie metody
        println("haha cba method")
    }
}

interface ExampleInterface {
    var myVar: Int
    fun absMethod(): String = "Hello ExampleInterface!"
}

class InterfaceImp : ExampleInterface{
    override var myVar: Int = 25;
    override fun absMethod(): String = "Hello InterfaceImp overrided absMethod!"
}

interface A {
    fun printMe(){
        println("A printed")
    }
}

interface B {
    fun printMe2(){
        println("B printed")
    }
}


class implementTwoInterfeces: A,B


class Alien {
    var skills: String = "null"

    fun printMySkills(){
        println(skills)
    }
}


fun Alien.addMySkills(a:Alien): String {
    var a4 = Alien()
    a4.skills = this.skills + "     "+a.skills
    return a4.skills
}


class TestCompanion {
    companion object {
        fun show(){
            println("companion object ty stetka")
        }
    }
}

sealed class TestSealedClass {
    class OP1: TestSealedClass()
    class OP2: TestSealedClass()
}


class genericExample<out T>(input: T){
    init {
        println("Generic class example = $input")
    }
}

interface Base {
    fun printMe()
}

class BaseImpl(val x: Int):Base {
    override fun printMe() { println(x) }

}

class Derived(b:Base) : Base by b

fun myFun(a:String, action: (String) -> Unit){
    print("Hey ")
    action(a)
}

data class User(val a:String, val b:String){
    var name = a
    var surname = b
}