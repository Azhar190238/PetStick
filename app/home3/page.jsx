'use client';
import TransformContent from '@/components/Common/TransformContent';
import ExploreBreads from '@/components/Home1/ExploreBreads';
import LatestPost from '@/components/home2/LatestPost';
import LookingFor from '@/components/home2/LookingFor';
import ShopPeat from '@/components/home2/ShopPeat';
import FeaturesCategories3 from '@/components/Home3/FeaturesCategories3';
import Hero3 from '@/components/Home3/Hero3';
import SellingProduct3 from '@/components/Home3/SellingProduct3';
import Team3 from '@/components/Home3/Team3';
import React from 'react';

const page = () => {
    return (
        <div>
           <Hero3/>
           <FeaturesCategories3/>
           <SellingProduct3/>
           <LookingFor/>
           <ExploreBreads/> 
           <ShopPeat/>
           <Team3/>
           <TransformContent bg='/Home3/Transformation/1.svg' heading='Transform a Life: The Power of Pet Adoption' description="Pet adoption provides a loving home to an animal in need, offering both companionship and fulfillment while helping to reduce shelter overcrowding. It's a meaningful way to make a positive impact." />
           <LatestPost/>
        </div>
    );
};

export default page;