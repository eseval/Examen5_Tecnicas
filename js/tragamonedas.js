angular.module("Tragamonedas", [])

    .controller("ControladorTragamonedas", function ($scope, $timeout) {

        $scope.carretes = [new Simbolo(), new Simbolo(), new Simbolo()];

        $scope.girando = false;

        $scope.resultado = null;

        $scope.stats = {
            ganadas: 0,
            casi: 0,
            perdidas: 0
        };

        $scope.girar = function () {
            $scope.girando = true;
            $scope.resultado = null;

            $timeout(function () {
                for (var i = 0; i < 3; i++) {
                    $scope.carretes[i] = new Simbolo();
                }

                $scope.evaluarResultado();

                $scope.reiniciar = function () {
                    $scope.stats = {
                        ganadas: 0,
                        casi: 0,
                        perdidas: 0
                    };

                    $scope.resultado = null;

                    $scope.carretes = [new Simbolo(), new Simbolo(), new Simbolo()];

                    $scope.girando = false;
                };


                $scope.girando = false;
            }, 1000);
        };

        $scope.evaluarResultado = function () {
            var simbolo1 = $scope.carretes[0].getIndice();
            var simbolo2 = $scope.carretes[1].getIndice();
            var simbolo3 = $scope.carretes[2].getIndice();

            if (simbolo1 === simbolo2 && simbolo2 === simbolo3) {
                $scope.resultado = "GANASTE";
                $scope.stats.ganadas++;
            } else if (simbolo1 === simbolo2 || simbolo1 === simbolo3 || simbolo2 === simbolo3) {
                $scope.resultado = "CASI";
                $scope.stats.casi++;
            } else {
                $scope.resultado = "PERDISTE";
                $scope.stats.perdidas++;
            }
        };

    });
