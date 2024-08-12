        // Chapter # 4 LEGAL AND ILLEGAL

        // Declare 3 variables in one statement
        var a = 1, b = 2, c = 3;

        // Declare 5 legal & 5 illegal variable names
        var legal1 = "value", $legal2 = "value", _legal3 = "value", legalName4 = "value", legalName5 = "value";

        // The following are illegal variable names:
        // var 1illegal = "value";  // Starts with a number
        // var #illegal = "value";  // Contains a special character (#)
        // var illegal-variable = "value";  // Contains a hyphen
        // var var = "value";  // Reserved keyword
        // var @illegal = "value";  // Contains a special character (@)

        // Displaying the heading
        document.write( "<h1>Rules for naming JS variables </h1>");
        
        // Displaying the rules
        document.write = ("Variable names can only contain letters, numbers, $ and _. <br>For example: $my_1stVariable <br/>");
        document.write = ("Variables must begin with a letter, $ or _. <br>For example: $name, _name, or name");
        document.write = ("Variable names are case sensitive.");
        document.write= ("Variable names should not be JS keywords.");
