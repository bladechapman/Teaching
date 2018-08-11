//
//  Meal.swift
//  mealtracker
//
//  Created by Blade Chapman on 8/11/18.
//  Copyright © 2018 Blade Chapman. All rights reserved.
//

import UIKit

class Meal {
    let name: String
    let photo: UIImage?
    let rating: Int
    
    init?(name: String, photo: UIImage?, rating: Int) {
        if (name.isEmpty || rating <= 0 || rating >= 5) {
            return nil
        }
        
        self.name = name
        self.photo = photo
        self.rating = rating
    }
}
