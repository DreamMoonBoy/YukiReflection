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
 * This file is created by fankes on 2022/2/10.
 * This file is modified by fankes on 2023/1/21.
 */
@file:Suppress("unused")

package com.dream.yukireflection.bean

import com.dream.yukireflection.factory.toKClassOrNull
import com.highcapable.yukireflection.factory.toClassOrNull
import kotlin.reflect.KClass

/**
 * 这是一个不确定性 [KClass] 类名装载器
 * @param name 可指定多个类名 - 将会自动匹配存在的第一个类名
 */
class KVariousClass(private vararg val name: String) {

    /**
     * 获取匹配的实体类
     *
     * - 使用当前 [loader] 装载目标 [KClass]
     * @param loader 当前 [ClassLoader] - 若留空使用默认 [ClassLoader]
     * @param initialize 是否初始化 [KClass] 的静态方法块 - 默认否
     * @return [KClass]
     * @throws IllegalStateException 如果任何 [KClass] 都没有匹配到
     */
    fun get(loader: ClassLoader? = null, initialize: Boolean = false): KClass<*> {
        var finalClass: KClass<*>? = null
        if (name.isNotEmpty()) run {
            name.forEach {
                finalClass = it.toKClassOrNull(loader, initialize)
                if (finalClass != null) return@run
            }
        }
        return finalClass ?: error("VariousClass match failed of those $this")
    }

    /**
     * 获取匹配的实体类
     *
     * - 使用当前 [loader] 装载目标 [KClass]
     *
     * 匹配不到 [KClass] 会返回 null - 不会抛出异常
     * @param loader 当前 [ClassLoader] - 若留空使用默认 [ClassLoader]
     * @param initialize 是否初始化 [KClass] 的静态方法块 - 默认否
     * @return [KClass] or null
     */
    fun getOrNull(loader: ClassLoader? = null, initialize: Boolean = false) = runCatching { get(loader, initialize) }.getOrNull()

    override fun toString(): String {
        var result = ""
        return if (name.isNotEmpty()) {
            name.forEach { result += "\"$it\"," }
            "[${result.substring(0, result.lastIndex)}]"
        } else "[]"
    }
}