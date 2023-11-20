# js-StringObject-StringMethods #stringobject #stringmethods
STRING:
Strings in javascript are the collection of characters which are enclosed within single quotes or double quotes.
The text which is enclosed within and quotes either the text or number it should be considered as a string.
for example:
* var str1="welcome";
* var str2='welcome';
* var str3="10";
* var str4='10';
Here str1,str2,str3,str4 is string type.
Here typeof str1 is string .

STRING_OBJECT:
String can be converted into string object. 'new' keyword is used to create object.
for example:
* var str5=new String("javascript");
* var str6=new String('javascript');
* var str7=new String("hlo this is my home");
Here, str5,str6,str7 are object type .
If you want to check the typeof string i.e.., typeof str5 is object .

STRING_METHODS:

  Method                           syntax                                                      result
* length()                     -   s.length()                            - returns length of the string.
* indexOf()                    -   s.indexOf("string/char")              - returns index first occurance otherwise returns false(-1)
* lastIndexOf()                - s.lastIndexOf("string/char")            - returns index last occurance otherwise returns -1
* indexOf()                    - s.indexOf("string/object",start index)  - returns index value from start index onwards otherwise returns  -1
* search()                     - s.search("string/object")               - returns index of first occurance
* slice()                      - s.slice(start index, end index)         - returns strings from startind index to till end index. NOTE : starting index included and ending index will be exculded ; for parameters can be negative index also.
* substring()                  - s.substring(startindex,end index)       - returns sub string -ve indexing are not allowed.
* replace()                    - s.replace(old_string , new_string)      - replaces the old string with new string
* toUpperCase()                - s.toUpperCase()                         - converts the string into uppercase.
* toLowerCase()                - s.toLowerCase()                         - converts the string into lowercase.
* concat()                     - s1.concat(s2)                           - returns the string i.e.., adds the s string to s2
* trim()                       - s.trim()                                - removes spaces at front char and at end char.
  Extracting the characters from the position:
* charAt()                     - s.charAt(position)                      - returns character at given position.
* charCodeAt()                 - s.charCodeAt(position)                  - returns unicode value of the character position.


> We can access the elements from the string using index.
> index of a string starts from 0 to (string.length)-1.



