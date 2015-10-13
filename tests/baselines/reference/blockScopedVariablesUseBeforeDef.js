//// [blockScopedVariablesUseBeforeDef.ts]
function foo1() {
    let a = () => x;
    let x;
}

function foo2() {
    let a = function () { return x; }
    let x;
}

function foo3() {
    class X {
        m() { return x;}
    }
    let x;
}

function foo4() {
    let y = class {
        m() { return x; }
    };
    let x;
}

function foo5() {
    let x = () => y;
    let y = () => x;
}

function foo6() {
    function f() {
        return x;
    }
    let x;
}

function foo7() {
    class A {
        a = x;
    }
    let x;
}

function foo8() {
    let y = class {
        a = x;
    }
    let x;
}

function foo9() {
    let y = class {
        static a = x;
    }
    let x;
}

function foo10() {
    class A {
        static a = x;
    }
    let x;
}

function foo11() {
    function f () {
        let y = class {
            static a = x;
        }
    }
    let x;
}

function foo12() {
    function f () {
        let y = class {
            a;
            constructor() {
                this.a = x;
            }
        }
    }
    let x;
}

//// [blockScopedVariablesUseBeforeDef.js]
function foo1() {
    var a = function () { return x; };
    var x;
}
function foo2() {
    var a = function () { return x; };
    var x;
}
function foo3() {
    var X = (function () {
        function X() {
        }
        X.prototype.m = function () { return x; };
        return X;
    })();
    var x;
}
function foo4() {
    var y = (function () {
        function class_1() {
        }
        class_1.prototype.m = function () { return x; };
        return class_1;
    })();
    var x;
}
function foo5() {
    var x = function () { return y; };
    var y = function () { return x; };
}
function foo6() {
    function f() {
        return x;
    }
    var x;
}
function foo7() {
    var A = (function () {
        function A() {
            this.a = x;
        }
        return A;
    })();
    var x;
}
function foo8() {
    var y = (function () {
        function class_2() {
            this.a = x;
        }
        return class_2;
    })();
    var x;
}
function foo9() {
    var y = (function () {
        function class_3() {
        }
        class_3.a = x;
        return class_3;
    })();
    var x;
}
function foo10() {
    var A = (function () {
        function A() {
        }
        A.a = x;
        return A;
    })();
    var x;
}
function foo11() {
    function f() {
        var y = (function () {
            function class_4() {
            }
            class_4.a = x;
            return class_4;
        })();
    }
    var x;
}
function foo12() {
    function f() {
        var y = (function () {
            function class_5() {
                this.a = x;
            }
            return class_5;
        })();
    }
    var x;
}
