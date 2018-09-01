//
//  Meal.swift
//  mealtracker
//
//  Created by Blade Chapman on 8/11/18.
//  Copyright © 2018 Blade Chapman. All rights reserved.
//

import UIKit

struct PropertyKey {
    static let name = "name"
    static let photo = "photo"
    static let rating = "rating"
}

class Meal: NSObject, NSCoding {
    let name: String
    let photo: UIImage?
    let rating: Int
    
    static let DocumentsDirectory = FileManager().urls(for: .documentDirectory, in: .userDomainMask).first!
    static let ArchiveURL = DocumentsDirectory.appendingPathComponent("meals")
    
    init?(name: String, photo: UIImage?, rating: Int) {
        if (name.isEmpty || rating <= 0 || rating >= 5) {
            return nil
        }
        
        self.name = name
        self.photo = photo
        self.rating = rating
    }
    
    required convenience init?(coder aDecoder: NSCoder) {
        guard let name = aDecoder.decodeObject(forKey: PropertyKey.name) as? String else {
            print("Failed to initialize meal")
            return nil
        }
        
        let photo = aDecoder.decodeObject(forKey: PropertyKey.photo) as? UIImage
        let rating = aDecoder.decodeInteger(forKey: PropertyKey.rating)
        
        self.init(name: name, photo: photo, rating: rating)
    }
    
    func encode(with aCoder: NSCoder) {
        aCoder.encode(name, forKey: PropertyKey.name)
        aCoder.encode(photo, forKey: PropertyKey.photo)
        aCoder.encode(rating, forKey: PropertyKey.rating)
    }
    
}
