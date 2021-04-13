var app = angular.module("myapp", []);
app.controller("ListController", ['$scope', function($scope) {
    $scope.news = [{
            'title': 'Virat Kohli',
            'description': 'Virat Kohli becomes the no.1  ODI batsmen',
            'author': 'Rahul',
            'newscategory': 'Sports',
            'breakingnews': 'No',
            'comments': ''
        },
        {
            'title': 'Narendra Modi',
            'description': 'Modi will arrive in Kolkata today at 11pm',
            'author': 'Ashwin',
            'newscategory': 'Politics',
            'breakingnews': 'Yes',
            'comments': ''
        },
        {
            'title': 'Salman Khan',
            'description': 'Salman Khan becomes the top bollywood actor',
            'author': 'Vijay',
            'newscategory': 'Film',
            'breakingnews': 'No',
            'comments': ''
        }
    ];

    $scope.addNew = function(news) {
        $scope.news.push({
            'title': news.title,
            'description': news.description,
            'author': news.author,
            'newscategory': news.newscategory,
            'breakingnews': news.breakingnews,
            'comments': news.comments,
        });
        $scope.PD = {};
    };

    $scope.remove = function() {
        var newDataList = [];
        $scope.selectedAll = false;
        angular.forEach($scope.news, function(selected) {
            if (!selected.selected) {
                newDataList.push(selected);
            }
        });
        $scope.news = newDataList;
    };

    $scope.checkAll = function() {
        if (!$scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.news, function(news) {
            news.selected = $scope.selectedAll;
        });
    };

}]);
