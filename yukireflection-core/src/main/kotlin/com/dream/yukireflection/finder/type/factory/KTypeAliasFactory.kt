/*
 * YukiReflection - An efficient Reflection API for Java and Android built in Kotlin.
 * Copyright (C) 2019-2024 HighCapable
 * https://github.com/HighCapable/YukiReflection
 *
 * Apache License Version 2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * This file is created by fankes on 2022/9/14.
 * This file is modified by fankes on 2023/1/21.
 */
package com.dream.yukireflection.finder.type.factory

import com.dream.yukireflection.finder.base.rules.KModifierRules
import com.dream.yukireflection.finder.classes.KClassFinder
import com.dream.yukireflection.finder.callable.KConstructorFinder
import com.dream.yukireflection.finder.callable.KFunctionFinder
import com.dream.yukireflection.finder.callable.KPropertyFinder
import com.highcapable.yukireflection.finder.base.rules.ObjectRules
import kotlin.reflect.KParameter
import kotlin.reflect.KType

/** 定义 [KClassFinder] 方法体类型 */
internal typealias KClassConditions = KClassFinder.() -> Unit

/** 定义 [KPropertyFinder] 方法体类型 */
internal typealias KPropertyConditions = KPropertyFinder.() -> Unit

/** 定义 [KFunctionFinder] 方法体类型 */
internal typealias KFunctionConditions = KFunctionFinder.() -> Unit

/** 定义 [KConstructorFinder] 方法体类型 */
internal typealias KConstructorConditions = KConstructorFinder.() -> Unit

/** 定义 [KModifierRules] 方法体类型 */
internal typealias KModifierConditions = KModifierRules.() -> Boolean

/** 定义 [ObjectRules] 方法体类型 */
internal typealias KTypeConditions = ObjectRules.(KType) -> Boolean

/** 定义 [ObjectRules] 方法体类型 */
internal typealias KParameterConditions = ObjectRules.(List<KParameter>) -> Boolean